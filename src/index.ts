import express from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth.routes';
import atividadesRoutes from './routes/atividades.routes';
import anomaliasRoutes from './routes/anomalias.routes';
import aprRoutes from './routes/apr.routes';
import equipamentosRoutes from './routes/equipamentos.routes';
import gruposRoutes from './routes/grupos.routes';
import subgruposRoutes from './routes/subgrupos.routes';
import tiposAtividadeRoutes from './routes/tipos_atividade.routes';
import perguntasRoutes from './routes/perguntas.routes';
import { verificarToken } from './middlewares/auth.middleware';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas públicas
app.use('/api/auth', authRoutes);

// Middleware de autenticação para rotas protegidas
app.use('/api', verificarToken);

// Rotas protegidas
app.use('/api/atividades', atividadesRoutes);
app.use('/api/anomalias', anomaliasRoutes);
app.use('/api/apr', aprRoutes);
app.use('/api/equipamentos', equipamentosRoutes);
app.use('/api/grupos', gruposRoutes);
app.use('/api/subgrupos', subgruposRoutes);
app.use('/api/tipos-atividade', tiposAtividadeRoutes);
app.use('/api/perguntas', perguntasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});