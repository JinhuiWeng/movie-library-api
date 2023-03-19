const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");

  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => winston.info(`Connected to Mongodb`));

  // mongoose
  //   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  //   .then(() => winston.info(`Connected to ${db}...`));
};
