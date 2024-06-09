import { CarModel } from '../models/cars.model';

export const getAllCars = async () => {
    return await CarModel.query();
}
export const getAvailableCars = async () => {
    return await CarModel.query()
            .where('availability', true);
}
export const getCarById = async (id: number) => {
    return await CarModel.query()
            .findById(id);
}
export const createCar = async (params: Partial<CarModel>) => {
    return await CarModel.query()
            .insert(params);
}
export const updateCar = async (id: number, params: Partial<CarModel>) => {
    return await CarModel.query()
            .findById(id)
            .patch(params);
}
export const deleteCar = async (id: number) => {
    return await CarModel.query()
            .deleteById(id);
}