

const express = require("express");
const server = express();

//This static method is used for accesing any static contents like images,txt file from the static folder
// for accessing this now we just have to use localhost:8080/file/text.js to locate
server.use(express.static(__dirname+'/public/'));



server.listen(8080, () => {
  console.log("Server Started");
});
