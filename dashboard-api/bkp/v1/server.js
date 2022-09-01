/**
 * express framework used here to handle routes, in http requests
 */
const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// allowed server to share the resources for any address (API Call, Specific domain, HTTP requests)
var cors = require("cors");
app.use(cors());

// app.use() is used to handle all http requests, and it is used to introduce middleware in our application
const sensor_routes = require("./routes/sensor_routes");
app.use("/sensors", sensor_routes);

const chart_stats_routes = require("./routes/chart_stats_routes");
app.use("/chart_stats", chart_stats_routes);

const device_events_routes = require("./routes/device_events_routes");
app.use("/device_events", device_events_routes);

const device_logs_routes = require("./routes/device_logs_routes");
app.use("/device_logs", device_logs_routes);

const weekly_avg_events_routes = require("./routes/weekly_avg_events_routes");
app.use("/weekly_avg_events", weekly_avg_events_routes);

const weekly_temps_routes = require("./routes/weekly_temps_routes");
app.use("/weekly_temps", weekly_temps_routes);

// Handle unknown routes
app.use(function(req, res) {
  res.sendStatus(404);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
