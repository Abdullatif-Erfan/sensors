const express = require("express");
const operationController = require("../controllers/sensorsOperation");
const router = express.Router();

// Add Sensors
router.route("/").post(operationController.addSensors);

module.exports = router;
