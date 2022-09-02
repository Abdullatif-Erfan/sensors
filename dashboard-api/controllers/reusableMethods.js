const axios = require("axios");
const fs = require("fs");

// ================== Read from json file ===========
function readJsonFile(mainFile, response) {
  fs.readFile(mainFile, "utf8", function(err, data) {
    if (err) {
      response.json({ message: "Error in reading file", data: err });
    }
    response.status(200).json({
      status: "Success",
      records: JSON.parse(data)
    });
  });
}
exports.readJsonFile = readJsonFile;


// ================== Read from json file and return the result ===========
function readJsonFileAndReturnResult(mainFile, response) {
  fs.readFile(mainFile, "utf8", function(err, data) {
    if (err) {
      response.json({ message: "Error in reading file", data: err });
    }
    return JSON.parse(data);
  });
}
exports.readJsonFileAndReturnResult = readJsonFileAndReturnResult;

// ====== Reusable method for sending failed message =====
function sendFailedMessage(response, status, customMessage) {
  response.status(status).json({
    status: "failed",
    message: customMessage
  });
}
exports.sendFailedMessage = sendFailedMessage;
