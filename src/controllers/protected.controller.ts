import { Request, Response } from 'express';

export const getProtectedData = (req: Request, res: Response) => {
  res.status(200).json({ message: 'This is protected data' });
};
