import { Router } from 'express';
import { listarTecnicos } from '../controllers/tecnicos.controller';

const router = Router();

router.get('/', listarTecnicos);

export default router; 