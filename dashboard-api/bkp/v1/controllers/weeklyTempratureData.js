const fs = require("fs");

const { readJsonFile, sendFailedMessage } = require("./reusableMethods");

/**
 * @route   GET
 * @desc    Get Weekly Tempratures Data
 * @access  Public
 */
exports.getWeeklyTempData = async (request, response) => {
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
