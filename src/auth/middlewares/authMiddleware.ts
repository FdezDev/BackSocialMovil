import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({ status: 'error', message: 'Token requerido' });

    try {
        next();
    } catch (error) {
        res.status(401).send({ status: 'error', message: 'Token inválido' });
    }
}