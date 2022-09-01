const express = require("express");
const detailsDataController = require("../controllers/detailsData");
const router = express.Router();

// Message, DownTime, Alerts, and Weekly Average Temprature Routes
router
  .route("/msg_downtime_alert_wklyAVGTemp")
  .get(detailsDataController.getDetailsData);

//   Daily Temprature Chart Route
router
  .route("/daily_temprature_chart")
  .get(detailsDataController.getDailyTempChartData);

//   System Log Route
router.route("/system_log").get(detailsDataController.getSystemLogData);

//  Activity Route
router.route("/activity").get(detailsDataController.getActivityData);

module.exports = router;
