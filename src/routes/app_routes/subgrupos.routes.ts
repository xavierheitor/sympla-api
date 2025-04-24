import { Router } from 'express';
import { listarSubgrupos } from '../../controllers/subgrupos.controller';

const router = Router();

router.get('/', listarSubgrupos);

export default router; 