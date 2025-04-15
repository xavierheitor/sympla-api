import { Router } from 'express';
import { listarPerguntas } from '../controllers/perguntas.controller';

const router = Router();

router.get('/', listarPerguntas);

export default router; 