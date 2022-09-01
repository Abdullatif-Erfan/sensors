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
/**
 * Routes for: Home Page
 * 1. Total Sensors
 * 2. Total Open Alerts
 * 3. Total Customers
 * 4. Sensor Temprature Chart
 * 5. Sensors List With Pagination
 */
const home_routes = require("./routes/home_routes");
app.use("/home", home_routes);

/**
 * Routes for: Sensor Details Page
 * 1. Total Messages
 * 2. Total Down Time
 * 3. Total Alerts
 * 4. Weekly Average Temprature
 * 5. Daily Temprature
 * 6. Device Log
 * 7. Activity
 */
const details_data_routes = require("./routes/details_routes");
app.use("/details", details_data_routes);

// Handle unknown routes
app.use(function(req, res) {
  res.sendStatus(404);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
