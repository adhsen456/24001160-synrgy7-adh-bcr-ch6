import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config:  { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            database: process.env.DATABASE,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            port: Number(process.env.DATABASE_PORT),
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'challenge_6',
            user: 'postgres',
            password: 'postgres123',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName:'knex_migrations',
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'challenge_6',
            user: 'postgres',
            password: 'postgres123',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations'
        },
    },
};

export default config;