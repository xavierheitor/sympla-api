import express from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth_routes/auth.routes';
import { verificarToken } from './middlewares/auth.middleware';
import appRoutes from './routes/app_routes/index.routes';
import v2Routes from './routes/v2_mock_routes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas públicas
app.use('/api/auth', authRoutes);

// Middleware de autenticação para todas as rotas
// app.use(verificarToken);

// Rotas protegidas
app.use('/api', appRoutes, verificarToken);
app.use('/api/v2', v2Routes, verificarToken);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});