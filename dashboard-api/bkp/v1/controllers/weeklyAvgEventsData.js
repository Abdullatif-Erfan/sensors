const fs = require("fs");

const { readJsonFile, sendFailedMessage } = require("./reusableMethods");

/**
 * @route   GET
 * @desc    Get Devise Logs
 * @access  Public
 */
exports.getweeklyAvgData = async (request, response) => {
  try {
    let mainFile = "./data/weekle-average-temp.json";

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
