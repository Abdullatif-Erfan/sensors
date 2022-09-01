const fs = require("fs");

const { readJsonFile, sendFailedMessage } = require("./reusableMethods");

/**
 * @route   GET
 * @desc    Get Details Data
 * @access  Public
 */
exports.getDetailsData = async (request, response) => {
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

/**
 * @route   GET
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
