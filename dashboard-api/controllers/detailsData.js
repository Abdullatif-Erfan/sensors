const fs = require("fs");

const { readJsonFile, sendFailedMessage } = require("./reusableMethods");

/**
 * @route   GET msg_downtime_alert_wklyAVGTemp
 * @desc    Get Details Data
 * @access  Public
 */
exports.getDetailsData = async (request, response) => {
  try {
    let mainFile = "./data/detail-data.json";

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
 * @route   GET daily_temprature_chart
 * @desc    Get Daily Temprature Data
 * @access  Public
 */
exports.getDailyTempChartData = async (request, response) => {
  try {
    let mainFile = "./data/weekly-temps.json";

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
 * @route   GET system_log
 * @desc    Get System Log Data
 * @access  Public
 */
exports.getSystemLogData = async (request, response) => {
  try {
    let mainFile = "./data/logs.json";

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
 * @route   GET activity
 * @desc    Get Activity  Data
 * @access  Public
 */
exports.getActivityData = async (request, response) => {
  try {
    let mainFile = "./data/events.json";

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
