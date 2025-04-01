import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
        {
            name: 'Products',
            description: 'API operations related to products'
        }

    ],
    info: {
      title: "REST API Node.js / Express / Typescript",
      version: "1.0.0",
      description: "API Docs for products"
        }
    },
    apis: ['./src/router.ts'] // Path to the API docs
     // Path to the API docs
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec;