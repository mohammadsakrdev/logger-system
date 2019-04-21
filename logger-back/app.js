"use strict";

const Hapi = require("hapi");
const mongoose = require("mongoose");
const Inert = require("inert");
const Vision = require("vision");
const Joi = require("joi");
const HapiSwagger = require("hapi-swagger");

const logRoutes = require("./routes/log");

const MongoDBUrl = "mongodb://localhost:27017/logger";

// Create server
const server = new Hapi.Server({
  port: 3000,
  host: "localhost",
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Accept", "Content-Type"],
      additionalHeaders: ["X-Requested-With"]
    }
  }
});

(async () => {
  const swaggerOptions = {
    info: {
      title: "Test API Documentation",
      version: "0.0.1"
    }
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
      name: "HapiSwagger"
    }
  ]);

  try {
    await server.start();

    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, { useNewUrlParser: true }).then(
      () => {
        console.log(`Connected to Mongo server`);
      },
      err => {
        console.log(err);
      }
    );
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
  }

  server.route(logRoutes);
})();

module.exports = server;
