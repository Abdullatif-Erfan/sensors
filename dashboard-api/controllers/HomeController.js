const fs = require("fs");

const {
  readJsonFile,
  sendFailedMessage,
  readJsonFileAndReturnResult
} = require("./reusableMethods");

/**
 * @route   GET total_sensors
 * @desc    get total Sensors from sensor list
 * @access  Public
 */
exports.getTotalSensors = async (request, response) => {
  try {
    let mainFile = "./data/sensors.json";

    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      /* ----- Get Total Sensors -------- */
      fs.readFile(mainFile, "utf8", function(err, data) {
        if (err) {
          response.json({ message: "Error in reading file", data: err });
        }
        const totalSensors = JSON.parse(data);
        response.status(200).json({
          status: "Success",
          records: totalSensors.length
        });
      });
    } else {
      /* file does not exist */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};

/**
 * @route   GET total_open_alerts
 * @desc    Get Total Alerts data
 * @access  Public
 */
exports.getTotalAlertsData = async (request, response) => {
  try {
    let mainFile = "./data/detail-data.json";

    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      /* ------------ just get total alerts  -------------- */
      fs.readFile(mainFile, "utf8", function(err, data) {
        if (err) {
          response.json({ message: "Error in reading file", data: err });
        }
        const jsonFormatData = JSON.parse(data);
        const totalAlerts = jsonFormatData.overview.alerts;
        response.status(200).json({
          status: "Success",
          records: totalAlerts
        });
      });
    } else {
      /* file does not exist */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};

/**
 * @route   GET total_customers
 * @desc    get total customers from sensor list
 * @access  Public
 */
exports.getTotalCustomers = async (request, response) => {
  try {
    let mainFile = "./data/sensors.json";

    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      /* ----- Get Total Customers -------- */
      fs.readFile(mainFile, "utf8", function(err, data) {
        if (err) {
          response.json({ message: "Error in reading file", data: err });
        }
        const jsonFormatData = JSON.parse(data);
        const getTotalCustomers = getTotalCustomersFromJsonList(jsonFormatData);
        response.status(200).json({
          status: "Success",
          records: getTotalCustomers
        });
        // console.log(getTotalCustomers);
      });
    } else {
      /* file does not exist */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};

/**
 * @DESC  extract unique custormers and return the amount
 */
function getTotalCustomersFromJsonList(sensorsList) {
  /**
   * 1. create unique Array to store unique customers
   * 2. loop through the object and return just customers value and use flat to make a combine sub arrays
   * 3. check if customer deos not exit in uniqueArr then pusth into uniqueArr
   * 4. return uniqueArr.length
   */
  let uniqueArr = [];
  let customersList = sensorsList.map(list => [list.customer]).flat();
  for (let i = 0; i < customersList.length; i++) {
    if (!uniqueArr.includes(customersList[i])) uniqueArr.push(customersList[i]);
  }
  return uniqueArr.length;
}

/**
 * @route   GET sensor_temp_char
 * @desc    Get Chart Data for Home Page
 * @access  Public
 */
exports.getChartData = async (request, response) => {
  try {
    let mainFile = "./data/home_page_charts.json";

    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      /* and read the file */
      readJsonFile(mainFile, response);
    } else {
      /* file does not exist */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};

/**
 * @route   GET sensors_list
 * @desc    Get Sensors List
 * @access  Public
 */
exports.getSensors = async (request, response) => {
  try {
    let mainFile = "./data/sensors.json";

    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      /* Read the file and provide pagination */
      fs.readFile(mainFile, "utf8", function(err, data) {
        if (err) {
          response.json({ message: "Error in reading file", data: err });
        }
        const sensors = JSON.parse(data);
        const { results, startIndex, endIndex } = pagination(request, sensors);
        results.results = sensors.slice(startIndex, endIndex);
        response.json(results);
      });
    } else {
      /* file does not exist show custome message */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};

/**
 * @desc    Reusable pagination function
 */
function pagination(request, sensors) {
  const page = parseInt(request.query.page);
  const limit = parseInt(request.query.limit);

  /**
   * page1 and Limit2: startIndex =>  (1-1) * 2 => 0 ---> in first page startIndex should be zero to become hide
   * page2 and Limit2: startIndex =>  (2-1) * 2 => 2 ---> in second page startIndex should be greater than zero to be shown
   *
   * Suppose we have 10 records and 5 pages
   * page5 and Limit2: endIndex => 5 * 2 = 10.  ---> if(endIndex < sensors.length) => 10 < 10. condition not match and next button should be hidden
   */
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  // do not attach next page with its data when we reatched at the end of list
  if (endIndex < sensors.length) {
    results.next = {
      page: page + 1,
      limit: limit
    };
  }

  // do not attach previous page with its data when we are or reatched at the first page
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    };
  }
  return { results, startIndex, endIndex };
}
