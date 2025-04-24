import { Router } from 'express';
import { listarEquipamentos } from '../../controllers/equipamentos.controller';

const router = Router();

router.get('/', listarEquipamentos);

export default router; 