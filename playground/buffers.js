//stream is a sequence of data beimg moved from one point to another over time 
const fs = require("fs");

const buffer = new Buffer.from('Joshua');

// console.log(buffer.toJSON());
// console.log(buffer);

const readerStream = fs.createReadStream("./sample.txt");

readerStream.on("data", function (chunk) {
  console.log(chunk.toString());
});

readerStream.on("end", function () {
  console.log("Stream Ended");
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});


