const fs = require("fs");

const {
  readJsonFile,
  sendFailedMessage,
  readJsonFileAndReturnResult
} = require("./reusableMethods");

/**
 * @route   POST
 * @desc    Add Sensors
 * @access  Public
 */
exports.addSensors = async (request, response) => {
  const {
    device_id,
    last_online,
    last_temp,
    customer,
    location
  } = request.body;
  //   console.log(request.body);
  try {
    let mainFile = "./data/sensors.json";
    /* 1: check if file exists */
    if (fs.existsSync(mainFile)) {
      
      // -------- Insertion will be done here -----------
      /**
      * 1. Get the Previouse data
      * 2. Add new Data at the end of List
       */
        // Note: I couldn't find enough time to completely complete it.

    } else {
      /* file does not exist */
      sendFailedMessage(response, 203, "File does not exist");
    }
  } catch (err) {
    sendFailedMessage(response, 204, err);
  }
};
