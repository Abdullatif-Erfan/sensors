const fs = require("fs");

const { readJsonFile, sendFailedMessage } = require("./reusableMethods");

/**
 * @route   GET
 * @desc    Get Chart Data for Home Page
 * @access  Public
 */
exports.getChartData = async (request, response) => {
  try {
    let mainFile = "./data/home_page_chart.json";

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
