const fs = require("fs");
const csv = require("csv-parser");

const parseCsvFile = (request, response, next) => {
  const { file } = request;
  if (!file) return response.status(400).send({
    message: "Bad request"
  })
  const rowsData = [];
  fs.createReadStream(file.path).pipe(csv()).on("data", data => {
    rowsData.push(data);
    request.appLocals = {
      voters: rowsData
    };
  }).on("finish", () => {
    return next()
  }).on("error", error => {
    console.log(error);
    response.status(400).send({
      message: "Error occured"
    })
  })

}

module.exports = parseCsvFile;