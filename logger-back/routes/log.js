const Joi = require("joi");

const LogController = require("../src/controllers/log");

const routes = [
  {
    method: "GET",
    path: "/api",
    options: {
      handler: LogController.sayingHello,
      description: "Get hello",
      notes: "Returns text to ensure app is working",
      tags: ["api"]
    }
  },
  {
    method: "GET",
    path: "/api/logs",
    options: {
      handler: LogController.list,
      description: "Get all logs",
      notes: "Returns logs list ordered by creation date desc",
      tags: ["api"],
      validate: {
        query: {
          limit: Joi.number()
            .default(100)
            .min(1)
            .max(100), //Set a sensible default and max page size
          page: Joi.number()
            .default(1)
            .positive() //Make sure they can't give a page number that would create a negative offset
        }
      }
    }
  },
  {
    method: "GET",
    path: "/api/log/{id}",
    options: {
      handler: LogController.get,
      description: "Get existing log",
      notes: "Returns a log item by the id passed in the path",
      tags: ["api"],
      validate: {
        params: {
          id: Joi.string()
            .required()
            .description("the id for the log item")
        }
      }
    }
  },
  {
    method: "Post",
    path: "/api/log",
    options: {
      handler: LogController.create,
      description: "Create new log",
      notes: "Returns created log",
      tags: ["api"],
      validate: {
        payload: {
          title: Joi.string()
            .required()
            .description("the title for the log item"),
          description: Joi.string()
            .required()
            .description("the description for the log item"),
          statusCode: Joi.number()
            .required()
            .description("the status code for the log item"),
          logPath: Joi.string()
            .required()
            .description("the log path for the log item")
        },
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        }
      }
    }
  }
];
module.exports = routes;
