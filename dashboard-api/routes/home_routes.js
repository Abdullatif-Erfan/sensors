const express = require("express");
const HomeController = require("../controllers/HomeController");
const router = express.Router();

// GET Total Sensors Data
router.route("/total_sensors").get(HomeController.getTotalSensors);

// GET total Open Alerts Data
router.route("/total_open_alerts").get(HomeController.getTotalAlertsData);

// GET Total Customers Data
router.route("/total_customers").get(HomeController.getTotalCustomers);

// GET Sensor Temprature Chart Data
router.route("/sensor_temp_char").get(HomeController.getChartData);

// GET Sensors List with Pagination Functionality
router.route("/sensors_list").get(HomeController.getSensors);

module.exports = router;
