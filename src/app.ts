import express from 'express';
import { connectDB } from './config';
import authRoutes from './routes/auth.route';
import protectedRoutes from './routes/protected.routes';

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/protected', protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
