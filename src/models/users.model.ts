import { Model, ModelObject } from "objection";

export class UserModel extends Model {
    id!: number
    email!: string
    name!: string
    password!: string
    role!: string
    createdAt!: Date
    updatedAt!: Date

    static get tableName() {
        return 'users';
    }
}

export type User = ModelObject<UserModel>