import { Router } from 'express';
import { listarPerguntas } from '../../controllers/checklists.controller';

const router = Router();

router.get('/', listarPerguntas);

export default router; 