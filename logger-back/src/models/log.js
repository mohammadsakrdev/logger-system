"use strict";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const logModel = new Schema({
  title: { type: String, required: true, index: { unique: true } },
  description: { type: String, required: true },
  statusCode: { type: Number, required: true },
  logPath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

logModel.plugin(mongoosePaginate);
module.exports = mongoose.model("Log", logModel, "logs");
