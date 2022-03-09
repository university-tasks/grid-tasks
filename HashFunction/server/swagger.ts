import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';

const options: SwaggerDefinition = {
    encoding: 'utf-8',
    failOnErrors: false,
    format: '',
    swaggerDefinition: {},
    definition: {
        openapi: '3.0.0',
    },
    apis: [],
    info: {
        title: 'API',
        version: '1.0.0',
    },
};

const specs = swaggerJSDoc(options);

export default specs;
