const express = require("express");
const weeklyAvgController = require("../controllers/weeklyAvgEventsData");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(weeklyAvgController.getweeklyAvgData);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
