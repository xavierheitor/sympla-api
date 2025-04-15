import { Router } from 'express';
import { listarGrupos } from '../controllers/grupos.controller';

const router = Router();

router.get('/', listarGrupos);

export default router; 