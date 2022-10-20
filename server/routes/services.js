var express = require("express");
var router = express.Router();

const services = require("../controllers/services");

router.get("/", services.getAll);
router.post("/", services.add);
router.delete("/", services.delete);

module.exports = router;
