import { Router } from 'express';
import { listarAtividades } from '../../controllers/atividades.controller';

const router = Router();

router.get('/', listarAtividades);

export default router; 