import { Router } from 'express';
import { listarAPRs } from '../../controllers/apr.controller';

const router = Router();

router.get('/', listarAPRs);

export default router; 