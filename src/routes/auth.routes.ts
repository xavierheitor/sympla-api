import { Router } from 'express';
import { login, logout, refreshToken, registro } from '../controllers/auth.controller';
import { verificarToken } from '../middlewares/auth.middleware';

const router = Router();

// Rotas públicas
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/registro', registro);

// Rota protegida
router.post('/logout', verificarToken, logout);

export default router; 