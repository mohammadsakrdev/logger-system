var Mongoose = require("mongoose");

const MongoDBUrl = "mongodb://localhost:27017/logger";

//load database
const db = mongoose.connect(MongoDBUrl, { useNewUrlParser: true }).then(
  () => {
    console.log(`Connected to Mongo server`);
  },
  err => {
    console.log(err);
  }
);

exports.db = db;
