import { Router } from 'express';
import { listarAtividadesApr } from '../../controllers/apr_atividade.controller';

const router = Router();

router.get('/', listarAtividadesApr);

export default router; 