const express = require("express");
const homePageChartController = require("../controllers/homePageChartData");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(homePageChartController.getChartData);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
