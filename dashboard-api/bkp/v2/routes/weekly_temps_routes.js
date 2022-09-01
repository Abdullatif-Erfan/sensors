const express = require("express");
const weeklyTempratureDataController = require("../controllers/weeklyTempratureData");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(weeklyTempratureDataController.getWeeklyTempData);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
