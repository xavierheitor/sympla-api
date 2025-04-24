import { Router } from 'express';
import { listarDefeitos } from '../../controllers/defeitos.controller';

const router = Router();

// Rota para listar todos os defeitos
router.get('/', listarDefeitos);

export default router; 