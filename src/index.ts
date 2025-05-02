import express from 'express';
import { prisma } from './prisma';
import authRoutes from './routes/auth_routes/auth.routes';
import { verificarToken } from './middlewares/auth.middleware';
import appRoutes from './routes/app_routes/index.routes';
import v2Routes from './routes/v2_mock_routes';
import { loggerMiddleware } from './middlewares/logger.middleware';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

// Rotas públicas
app.use('/api/auth', authRoutes);

// Rotas protegidas
app.use('/api', appRoutes, verificarToken);
app.use('/api/v2', v2Routes, verificarToken);

// -------------------
// MIDDLEWARES FINAIS
// -------------------

// 404: rota não encontrada
app.use((req, res, next) => {
    res.status(404).json({ error: 'Serviço não encontrado' });
});

// Tratamento global de erros
app.use(
    (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        console.error('[ERRO INTERNO]', err);
        res.status(500).json({ error: 'Erro interno no serviço' });
    }
);

const PORT = process.env.PORT || 3000;

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