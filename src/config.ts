import mongoose from 'mongoose';

export const JWT_SECRET = 'benites1234';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/jwt-auth');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};
