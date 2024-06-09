import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';
import http from 'http';
import dotenv from 'dotenv';
import { Model } from 'objection';
import router from './routers/index.routes';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as YAML from 'yaml';

dotenv.config();

const file = fs.readFileSync('./openapi.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

const PORT = Number(process.env.SERVER_PORT) || 8888;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const knexConnect = knex({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT),
    },
});

Model.knex(knexConnect);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`);
})