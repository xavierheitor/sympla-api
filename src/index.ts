import express from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth.routes';
import atividadesRoutes from './routes/atividades.routes';
import anomaliasRoutes from './routes/anomalias.routes';
import aprRoutes from './routes/apr.routes';
import aprAtividadeRoutes from './routes/apr_atividade.routes';
import equipamentosRoutes from './routes/equipamentos.routes';
import gruposRoutes from './routes/grupos.routes';
import subgruposRoutes from './routes/subgrupos.routes';
import tiposAtividadeRoutes from './routes/tipos_atividade.routes';
import perguntasRoutes from './routes/perguntas.routes';
import tecnicosRoutes from './routes/tecnicos.routes';
import checklistsRoutes from './routes/checklists.routes';
import defeitosRoutes from './routes/defeitos.routes';
import { verificarToken } from './middlewares/auth.middleware';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas públicas
app.use('/api/auth', authRoutes);

// Middleware de autenticação para todas as rotas
app.use(verificarToken);

// Rotas protegidas
app.use('/api/atividades', atividadesRoutes);
app.use('/api/anomalias', anomaliasRoutes);
app.use('/api/equipamentos', equipamentosRoutes);
app.use('/api/grupos', gruposRoutes);
app.use('/api/subgrupos', subgruposRoutes);
app.use('/api/tipos-atividade', tiposAtividadeRoutes);
app.use('/api/aprs', aprRoutes);
app.use('/api/apr-perguntas', perguntasRoutes);
app.use('/api/apr-atividades', aprAtividadeRoutes);
app.use('/api/tecnicos', tecnicosRoutes);
app.use('/api/checklists', checklistsRoutes);
app.use('/api/defeitos', defeitosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});