const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");


module.exports = function () {
  const db = config.get("db");
  console.log(process.env.MONGODB_URL);

  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((x) =>
      console.log(`Connected the Database: "${x.connections[0].name}"`)
    )
    .catch((err) => console.error("Error connecting to mongo", err));

  // mongoose
  //   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  //   .then(() => winston.info(`Connected to ${db}...`));
};
