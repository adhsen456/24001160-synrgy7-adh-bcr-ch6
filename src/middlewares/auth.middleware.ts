import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const SECRET_KEY = 'adhamsatriafirmansyah';

interface JWTPayload {
    id: string;
    name: string;
    email: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: JWTPayload;
        }
    }
}

export const whoAmI = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ 
            message: 'Please login first' ,
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JWTPayload;
        req.user = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
        };
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Token is not valid',
        });
    }
};

export const checkAccess = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Please login as either superadmin or admin!',
        });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JWTPayload;
        if (decoded.role !== 'superadmin' && decoded.role !== 'admin') {
            return res.status(403).json({
                message: 'Only superadmin can make new car data!',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'JWT token expired',
        });
    }
};

export const checkSuperAdmin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Please login as superadmin first!',
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JWTPayload;
        if (decoded.role !== 'superadmin') {
            return res.status(403).json({
                message: 'Only superadmin can make new admin account!',
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            message: 'JWT token expired',
        });
    }
};