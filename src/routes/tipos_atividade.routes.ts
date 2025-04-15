import { Router } from 'express';
import { listarTiposAtividade } from '../controllers/tipos_atividade.controller';

const router = Router();

router.get('/', listarTiposAtividade);

export default router; 