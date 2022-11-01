const { Service } = require("../models/services");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const result = await Service.find({});
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error getting services");
    }
  },

  add: async function (req, res, next) {
    try {
      const newUser = new Service(req.body);
      const result = await newUser.save();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error adding ");
    }
  },

  delete: async function (req, res, next) {
    try {
      await Service.deleteOne({ _id: req.body._id }).exec();
      res.json({ _id: req.body._id });
    } catch (err) {
      console.log(err);
      res.status(400).send("error delete ");
    }
  },
};
