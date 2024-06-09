import { Router } from 'express';
import { Request, Response } from 'express';
import carRoutes from './cars.routes';
import userRoutes from './user.routes'

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Enter router',
    })
});

router.use('/cars', carRoutes);
router.use('/user', userRoutes);

export default router;