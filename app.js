const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { initialize } = require("express-openapi");
const swaggerUi = require("swagger-ui-express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.listen(3030);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// OpenAPI routes
initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});

// Not found routes
app.get('/', function(req, res){
  res.send({
    'status' : 400,
    'message' : 'Invalid Request'
  }, 404);
});

// Default routes
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(500).send(err.message);
  }
});

// OpenAPI UI
app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "http://localhost:3030/api-docs",
    },
  })
);

console.log("App running on port http://localhost:3030");
console.log(
  "OpenAPI documentation available in http://localhost:3030/api-documentation"
);

module.exports = app;
