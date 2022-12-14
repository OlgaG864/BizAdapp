const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

exports.Service = Service;
