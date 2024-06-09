import { Request, Response } from 'express';

export const createCarMiddleware = async (req: Request, res: Response, next: Function) => {
    const { name, price, availability } = req.body;
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded, please upload a file',
            });
        }
        if(!name || !price || !availability) {
            return res.status(400).json({
                message: 'Please input name, price, and availability',
            });
        }
        next();
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}