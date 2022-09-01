const express = require("express");
const sensorController = require("../controllers/sensorController");
const router = express.Router();

// localhost:5000/total
router.route("/").get(sensorController.getSensors);
router.route("/total").get(sensorController.getTotalSensors);
router.route("/total_customers").get(sensorController.getTotalCustomers);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
