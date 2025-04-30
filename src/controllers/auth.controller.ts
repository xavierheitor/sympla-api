import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const REFRESH_TOKEN_EXPIRATION_DAYS = 7;

export const registro = async (req: Request, res: Response) => {
    console.log('🔧 [registro] Requisição recebida:', req.body);

    try {
        const { matricula, nome, email, senha, funcao } = req.body;

        if (!matricula || !nome || !senha || !funcao) {
            console.warn('⚠️ [registro] Dados insuficientes:', req.body);
            return res.status(400).json({ message: 'Dados insuficientes para registro' });
        }

        const usuarioExistente = await prisma.usuarioMobile.findUnique({ where: { matricula } });
        if (usuarioExistente) {
            console.warn('⚠️ [registro] Usuário já existe com matrícula:', matricula);
            return res.status(400).json({ message: 'Usuário já cadastrado com esta matrícula' });
        }

        const senhaHash = await bcrypt.hash(senha, 10);
        const usuario = await prisma.usuarioMobile.create({
            data: { matricula, nome, email, senha: senhaHash, funcao }
        });

        console.log('✅ [registro] Usuário criado com sucesso:', usuario);

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
        console.error('❌ [registro] Erro:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

export const login = async (req: Request, res: Response) => {
    console.log('🔐 [login] Requisição recebida:', req.body);

    try {
        const { matricula, senha, deviceInfo } = req.body;

        if (!matricula || !senha) {
            console.warn('⚠️ [login] Matrícula ou senha ausentes');
            return res.status(400).json({ message: 'Matrícula e senha são obrigatórios' });
        }

        const usuario = await prisma.usuarioMobile.findUnique({ where: { matricula } });

        if (!usuario || !usuario.ativo) {
            console.warn('⚠️ [login] Usuário não encontrado ou inativo:', matricula);
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            console.warn('⚠️ [login] Senha incorreta para matrícula:', matricula);
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = uuidv4();
        const refreshToken = uuidv4();

        const tokenExpiration = new Date();
        tokenExpiration.setDate(tokenExpiration.getDate() + 1);

        const refreshTokenExpiration = new Date();
        refreshTokenExpiration.setDate(refreshTokenExpiration.getDate() + REFRESH_TOKEN_EXPIRATION_DAYS);

        await prisma.tokenMobile.create({
            data: {
                token,
                refreshToken,
                usuarioId: usuario.id,
                expiresAt: tokenExpiration,
                refreshTokenExpiresAt: refreshTokenExpiration,
            }
        });

        await prisma.sessaoMobile.create({
            data: {
                usuarioId: usuario.id,
                deviceInfo: deviceInfo || 'Unknown device',
                expiresAt: refreshTokenExpiration,
            }
        });

        console.log('✅ [login] Login bem-sucedido para:', usuario.nome);

        res.json({
            message: 'Login realizado com sucesso',
            token,
            refreshToken,
            expiresAt: tokenExpiration,
            refreshTokenExpiresAt: refreshTokenExpiration,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                matricula: usuario.matricula,
            }
        });
    } catch (error) {
        console.error('❌ [login] Erro interno:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const logout = async (req: Request, res: Response) => {
    console.log('🚪 [logout] Requisição de logout');

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            console.warn('⚠️ [logout] Token ausente no header');
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        const [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !token) {
            console.warn('⚠️ [logout] Token mal formatado');
            return res.status(401).json({ message: 'Formato de token inválido' });
        }

        await prisma.tokenMobile.updateMany({
            where: { token },
            data: { revoked: true },
        });

        console.log('✅ [logout] Token revogado:', token);

        res.json({ message: 'Logout realizado com sucesso' });
    } catch (error) {
        console.error('❌ [logout] Erro:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const refreshToken = async (req: Request, res: Response) => {
    console.log('🔁 [refreshToken] Requisição recebida:', req.body);

    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            console.warn('⚠️ [refreshToken] Token ausente');
            return res.status(400).json({ message: 'Refresh token não fornecido' });
        }

        const tokenInfo = await prisma.tokenMobile.findFirst({
            where: {
                refreshToken,
                revoked: false,
                refreshTokenExpiresAt: { gt: new Date() }
            },
            include: {
                usuarios_mobile: true
            }
        });

        if (!tokenInfo) {
            console.warn('⚠️ [refreshToken] Token não encontrado ou expirado');
            return res.status(401).json({ message: 'Refresh token inválido ou expirado' });
        }

        if (!tokenInfo.usuarios_mobile) {
            console.warn('⚠️ [refreshToken] Usuário do token não encontrado');
            return res.status(401).json({ message: 'Usuário inválido' });
        }

        console.log('🔓 [refreshToken] Token válido encontrado:', tokenInfo.id);
        console.log('👤 Usuário:', tokenInfo.usuarios_mobile.nome);

        await prisma.tokenMobile.update({
            where: { id: tokenInfo.id },
            data: { revoked: true },
        });

        const newToken = uuidv4();
        const newRefreshToken = uuidv4();

        const tokenExpiration = new Date();
        tokenExpiration.setDate(tokenExpiration.getDate() + 1);

        const refreshTokenExpiration = new Date();
        refreshTokenExpiration.setDate(refreshTokenExpiration.getDate() + REFRESH_TOKEN_EXPIRATION_DAYS);

        await prisma.tokenMobile.create({
            data: {
                token: newToken,
                refreshToken: newRefreshToken,
                usuarioId: tokenInfo.usuarioId,
                expiresAt: tokenExpiration,
                refreshTokenExpiresAt: refreshTokenExpiration,
            }
        });

        console.log('✅ [refreshToken] Novo token gerado com sucesso');

        res.json({
            message: 'Token renovado com sucesso',
            token: newToken,
            refreshToken: newRefreshToken,
            expiresAt: tokenExpiration,
            refreshTokenExpiresAt: refreshTokenExpiration,
            usuario: {
                id: tokenInfo.usuarios_mobile.id,
                nome: tokenInfo.usuarios_mobile.nome,
                matricula: tokenInfo.usuarios_mobile.matricula,
            }
        });
    } catch (error) {
        console.error('❌ [refreshToken] Erro:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};