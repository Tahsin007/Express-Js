const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.JSON", "utf-8"));
const product = data.products;

const express = require("express");
const server = express();

//This raw method is used for parsing raw stream from the client to the server. The content-type must be application/octet-stream
server.use(express.raw());

// server.get("/", (req, res) => {
//   res.send("Hello");
// });
// server.get("/about", (req, res) => {
//   res.send("This is the about page");
// });
server.get("/contact", (req, res) => {
  console.log(req.body.toString());
  res.send("This is the contact page");
});

// server.post("/", (req, res) => {
//   res.send("Hello2");
// });

server.listen(8080, () => {
  console.log("Server Started");
});
