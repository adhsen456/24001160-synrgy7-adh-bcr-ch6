import { Model, ModelObject } from "objection";

export class CarModel extends Model {
    id!: number
    name!: string
    price!: number
    file!: string
    availability!: boolean
    startRent!: string
    finishRent!: string
    createdAt!: Date
    updatedAt!: Date

    static get tableName() {
        return 'cars';
    }
}

export type Cars = ModelObject<CarModel>