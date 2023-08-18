require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const indexRoute = require("./routes/index");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
require("./middlewares/passport");

//ROUTES
app.use("/api", indexRoute);

// SWAGGER
const setUpOptions = require("./config/swagger"); 
const swaggerSpecs = setUpOptions(PORT);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.listen(PORT, (error) => {
  if (error) console.log("Unable to start the server");
  else console.log(`Server listening on port ${PORT}`);
});
