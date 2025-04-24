import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET || 'seu_jwt_secret_aqui';
const TOKEN_EXPIRATION = '1d'; // 1 dia
const REFRESH_TOKEN_EXPIRATION = '7d'; // 7 dias

export const registro = async (req: Request, res: Response) => {
    try {
        const { matricula, nome, email, senha, funcao } = req.body;

        if (!matricula || !nome || !senha || !funcao) {
            return res.status(400).json({ message: 'Dados insuficientes para registro' });
        }

        // Verificar se o usuário já existe
        const usuarioExistente = await prisma.usuarioMobile.findUnique({
            where: { matricula }
        });

        if (usuarioExistente) {
            return res.status(400).json({ message: 'Usuário já cadastrado com esta matrícula' });
        }

        // Hash da senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // Criar usuário
        const usuario = await prisma.usuarioMobile.create({
            data: {
                matricula,
                nome,
                email,
                senha: senhaHash,
                funcao
            }
        });

        res.status(201).json({
            message: 'Usuário registrado com sucesso',
            usuario: {
                id: usuario.id,
                matricula: usuario.matricula,
                nome: usuario.nome,
                email: usuario.email,
                funcao: usuario.funcao
            }
        });

    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { matricula, senha, deviceInfo } = req.body;

        if (!matricula || !senha) {
            return res.status(400).json({ message: 'Matrícula e senha são obrigatórios' });
        }

        const usuario = await prisma.usuarioMobile.findUnique({
            where: { matricula }
        });

        if (!usuario || !usuario.ativo) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ userId: usuario.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
        const refreshToken = uuidv4();

        const tokenExpiration = new Date();
        tokenExpiration.setDate(tokenExpiration.getDate() + 1);

        const refreshTokenExpiration = new Date();
        refreshTokenExpiration.setDate(refreshTokenExpiration.getDate() + 7);

        await prisma.tokenMobile.create({
            data: {
                token,
                refreshToken,
                usuarioId: usuario.id,
                expiresAt: tokenExpiration
            }
        });

        await prisma.sessaoMobile.create({
            data: {
                usuarioId: usuario.id,
                deviceInfo: deviceInfo || 'Unknown device',
                expiresAt: refreshTokenExpiration,
            }
        });

        res.json({
            message: 'Login realizado com sucesso',
            usuario: {
                id: usuario.id,
                matricula: usuario.matricula,
                nome: usuario.nome,
                funcao: usuario.funcao
            },
            token,
            refreshToken,
            expiresAt: tokenExpiration
        });

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        const [bearer, token] = authHeader.split(' ');

        if (bearer !== 'Bearer' || !token) {
            return res.status(401).json({ message: 'Formato de token inválido' });
        }

        await prisma.tokenMobile.updateMany({
            where: {
                token,
                usuarioId: req.usuario?.id
            },
            data: {
                revoked: true
            }
        });

        await prisma.sessaoMobile.updateMany({
            where: {
                usuarioId: req.usuario?.id,
                ativa: true
            },
            data: {
                ativa: false
            }
        });

        res.json({ message: 'Logout realizado com sucesso' });

    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const refreshToken = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ message: 'Refresh token não fornecido' });
        }

        const tokenInfo = await prisma.tokenMobile.findFirst({
            where: {
                refreshToken,
                revoked: false,
                expiresAt: {
                    gt: new Date()
                }
            },
            include: {
                usuario: true
            }
        });

        if (!tokenInfo) {
            return res.status(401).json({ message: 'Refresh token inválido ou expirado' });
        }

        await prisma.tokenMobile.update({
            where: {
                id: tokenInfo.id
            },
            data: {
                revoked: true
            }
        });

        const newToken = jwt.sign({ userId: tokenInfo.usuario.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
        const newRefreshToken = uuidv4();

        const tokenExpiration = new Date();
        tokenExpiration.setDate(tokenExpiration.getDate() + 1);

        await prisma.tokenMobile.create({
            data: {
                token: newToken,
                refreshToken: newRefreshToken,
                usuarioId: tokenInfo.usuario.id,
                expiresAt: tokenExpiration
            }
        });

        res.json({
            message: 'Token renovado com sucesso',
            token: newToken,
            refreshToken: newRefreshToken,
            expiresAt: tokenExpiration,
            usuario: {
                id: tokenInfo.usuario.id,
                matricula: tokenInfo.usuario.matricula,
                nome: tokenInfo.usuario.nome,
                funcao: tokenInfo.usuario.funcao,
                email: tokenInfo.usuario.email
            }
        });

    } catch (error) {
        console.error('Erro ao renovar token:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

