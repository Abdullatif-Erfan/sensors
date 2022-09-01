const express = require("express");
const detailsDataController = require("../controllers/detailsData");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(detailsDataController.getDetailsData);
router.route("/totalAlerts").get(detailsDataController.getTotalAlertsData);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
