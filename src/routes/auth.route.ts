import { Router } from 'express';
import { register, login, verifyToken } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify', authMiddleware, verifyToken);

export default router;
