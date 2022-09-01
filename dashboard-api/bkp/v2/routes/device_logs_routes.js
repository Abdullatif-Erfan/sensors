const express = require("express");
const deviseLogDataController = require("../controllers/deviseLogData");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(deviseLogDataController.getDeviceLogData);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
