const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routers/index.routes.ts'];

swaggerAutogen(outputFile, endpointsFiles);