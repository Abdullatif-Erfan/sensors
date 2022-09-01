const express = require("express");
const deviseEventController = require("../controllers/deviseEventData");
const router = express.Router();

// localhost:5000/sensors
router.route("/").get(deviseEventController.getDeviceEventData);

// localhost:5000/movies/imdbID
// router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
