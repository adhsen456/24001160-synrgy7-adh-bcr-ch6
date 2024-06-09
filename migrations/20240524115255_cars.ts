import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cars', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.integer('price', 20).notNullable();
        table.text('file').notNullable();
        table.boolean('availability').notNullable();
        table.date('startRent').notNullable();
        table.date('finishRent').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cars');
}

