const swaggerJsdoc = require("swagger-jsdoc");


const setUpOptions = (PORT) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "ElectApp API with Swagger",
        version: "1.0.0",
        description:
          "ElectApp documentation with Swagger"
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

  return swaggerJsdoc(options);
}


module.exports = setUpOptions;