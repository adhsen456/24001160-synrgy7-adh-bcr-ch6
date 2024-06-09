import * as repository from '../repositories/users.repository';
import { UserModel } from '../models/users.model';

export const getUserById = async(id: number) => {
    return await repository.getUserById(id);
}
export const getUserByEmail = async(email: string) => {
    return await repository.getUserByEmail(email);
}
export const createUser = async(params: Partial<UserModel>) => {
    return await repository.createUser(params);
}
export const createUserAdmin = async(params: Partial<UserModel>) => {
    return await repository.createUser(params);
}
export const updateUser = async(id: number, params: Partial<UserModel>) => {
    return await repository.updateUser(id, params);
}