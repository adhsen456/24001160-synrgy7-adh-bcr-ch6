import { UserModel } from '../models/users.model';

export const getUserById = async(id: number) => {
    return await UserModel.query()
            .findById(id);
}
export const getUserByEmail = async(email: string) => {
    return await UserModel.query()
            .where('email', email)
            .first();
}
export const createUser = async(params: Partial<UserModel>) => {
    return await UserModel.query()
            .insert(params);
}
export const createUserAdmin = async(params: Partial<UserModel>) => {
    return await UserModel.query()
            .insert(params);
}
export const updateUser = async(id: number, params: Partial<UserModel>) => {
    return await UserModel.query()
            .findById(id)
            .patch(params);
}