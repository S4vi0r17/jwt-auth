import { Router } from 'express';
import { getProtectedData } from '../controllers/protected.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/data', authMiddleware, getProtectedData);

export default router;
