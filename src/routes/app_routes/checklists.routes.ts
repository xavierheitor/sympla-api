import { Router } from 'express';
import {
    listarChecklists,
    listarGruposPerguntas,
    listarPerguntas,
    listarChecklistAtividades
} from '../../controllers/checklists.controller';

const router = Router();

// Rota para listar todos os checklists
router.get('/', listarChecklists);

// Rota para listar todos os grupos de perguntas
router.get('/grupos', listarGruposPerguntas);

// Rota para listar todas as perguntas
router.get('/perguntas', listarPerguntas);

// Rota para listar atividades de checklist
router.get('/atividades', listarChecklistAtividades);

export default router; 