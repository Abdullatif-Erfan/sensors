const express = require("express");
const sensorController = require("../controllers/sensorController");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(sensorController.getSensors);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
