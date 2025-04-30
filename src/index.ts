import express from 'express';
import { prisma } from './prisma'; // ⬅️ Agora importa do lib
import authRoutes from './routes/auth_routes/auth.routes';
import { verificarToken } from './middlewares/auth.middleware';
import appRoutes from './routes/app_routes/index.routes';
import v2Routes from './routes/v2_mock_routes';
import { loggerMiddleware } from './middlewares/logger.middleware';

const app = express();

app.use(express.json());
app.use(loggerMiddleware); // ⬅️ Aqui

// Rotas públicas
app.use('/api/auth', authRoutes);

// Middleware de autenticação para todas as rotas
// app.use(verificarToken);

// Rotas protegidas
app.use('/api', appRoutes, verificarToken);
app.use('/api/v2', v2Routes, verificarToken);

const PORT = process.env.PORT || 3000;

// Desconectar o Prisma ao encerrar o servidor
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});