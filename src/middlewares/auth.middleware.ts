import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

// Estendendo o tipo Request para incluir o usuário
declare global {
    namespace Express {
        interface Request {
            usuario?: {
                id: number;
                matricula: string;
                nome: string;
            };
        }
    }
}

export const verificarToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        const [bearer, token] = authHeader.split(' ');

        if (bearer !== 'Bearer' || !token) {
            return res.status(401).json({ message: 'Formato de token inválido' });
        }

        // Verificar se o token existe e não foi revogado
        const tokenInfo = await prisma.tokenMobile.findFirst({
            where: {
                token,
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
            return res.status(401).json({ message: 'Token inválido ou expirado' });
        }

        // Atualizar última atividade na sessão
        await prisma.sessaoMobile.updateMany({
            where: {
                usuarioId: tokenInfo.usuarioId,
                ativa: true
            },
            data: {
                lastActive: new Date()
            }
        });

        // Adicionar usuário ao request
        req.usuario = {
            id: tokenInfo.usuario.id,
            matricula: tokenInfo.usuario.matricula,
            nome: tokenInfo.usuario.nome
        };

        next();
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 