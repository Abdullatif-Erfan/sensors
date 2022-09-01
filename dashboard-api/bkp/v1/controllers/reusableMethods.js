const axios = require("axios");
const fs = require("fs");

// ======== search, then return favorite records ========
function searchAndReturnTheResult(searchURL, response) {
  (async () => {
    axios
      .get(searchURL)
      .then(result => {
        // check movie records
        if (result.data["Response"] == "True") {
          // send needeed records
          const required_data = {
            title: result.data["Title"],
            imdbID: result.data["imdbID"],
            director: result.data["Director"],
            plot: result.data["Plot"],
            poster: result.data["Poster"]
          };
          response.status(200).json({
            status: "Success",
            records: required_data
          });
        } else {
          sendFailedMessage(response, 201, "No data found");
        }
      })
      .catch(error => {
        sendFailedMessage(response, 202, "Error fetching the data");
      });
  })();
}
exports.searchAndReturnTheResult = searchAndReturnTheResult;

// ============= Write into json file file ==============
function writeInToFile(mainFile, result, response) {
  fs.writeFile(
    mainFile,
    JSON.stringify(result.data["Search"], null, 4),
    err => {
      if (err) {
        sendFailedMessage(response, 205, "File written failed");
      } else {
        response.status(200).json({
          status: "Success",
          records: result.data["Search"]
        });
      }
    }
  );
}
exports.writeInToFile = writeInToFile;

// ================== Read from movieList.json file ===========
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

// ====== Reusable method for sending failed message =====
function sendFailedMessage(response, status, customMessage) {
  response.status(status).json({
    status: "failed",
    message: customMessage
  });
}
exports.sendFailedMessage = sendFailedMessage;
