const winston = require("winston");
const express = require("express");
const config = require("config");
const dotenv = require("dotenv");
const app = express();


dotenv.config();
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || "8080";
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
