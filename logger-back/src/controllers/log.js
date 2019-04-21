const Log = require("../models/log");
const Boom = require("boom");

/**
 * Say Hello
 */
exports.sayingHello = async (req, h) => {
  try {
    return "Hello, Logging is working";
  } catch (err) {
    Boom.badImplementation(err);
  }
};

/**
 * List Logs
 */
exports.list = async (req, h) => {
  try {
    const params = Object.assign({}, req.query);
    return await Log.find({})
      .skip((params.page - 1) * params.limit)
      .limit(params.limit)
      .sort({ createdAt: "desc" })
      .exec()
      .then(logs => {
        // return { logs: log };
        return logs;
      })
      .catch(err => {
        return { err: err };
      });
  } catch (err) {
    Boom.badImplementation(err);
  }
};

/**
 * Get Log by ID
 */
exports.get = async (req, h) => {
  try {
    return await Log.findById(req.params.id)
      .exec()
      .then(log => {
        if (!log) return { message: "Log not Found" };

        return { log: log };
      })
      .catch(err => {
        return { err: err };
      });
  } catch (err) {
    Boom.badImplementation(err);
  }
};

/**
 * POST a Log
 */
exports.create = async (req, h) => {
  try {
    const logData = {
      title: req.payload.title,
      description: req.payload.description,
      statusCode: req.payload.statusCode,
      logPath: req.payload.logPath
    };

    return await Log.create(logData)
      .then(log => {
        return { message: "Log created successfully", log: log };
      })
      .catch(err => {
        return { err: err };
      });
  } catch (err) {
    Boom.badImplementation(err);
  }
};
