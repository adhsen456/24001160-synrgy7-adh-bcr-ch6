import * as repository from '../repositories/cars.repository';
import { CarModel } from '../models/cars.model';


export const getAllCars = async () => {
    return await repository.getAllCars();
}
export const getAvailableCars = async () => {
    return await repository.getAvailableCars();
}
export const getCarById = async (id: number) => {
    return await repository.getCarById(id);
}
export const createCar = async (params: Partial<CarModel>) => {
    return await repository.createCar(params);
}
export const updateCar = async (id: number, params: Partial<CarModel>) => {
    return await repository.updateCar(id, params);
}
export const deleteCar = async (id: number) => {
    return await repository.deleteCar(id);
}