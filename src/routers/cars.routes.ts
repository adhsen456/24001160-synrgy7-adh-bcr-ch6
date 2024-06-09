import { Router } from "express";
import { createCar, deleteCar, getAllCars, getCarById, updateCar } from "../controllers/cars";
import { createCarMiddleware } from "../middlewares/cars.middleware";
import UploadFile from "../middlewares/multer.middleware";

const router = Router();

router.get('/', getAllCars);
router.get('/:id', getCarById);
router.post('/', UploadFile.single('file'), createCarMiddleware, createCar);
router.put('/:id', UploadFile.single('file'), updateCar);
router.delete('/:id', deleteCar);

export default router;