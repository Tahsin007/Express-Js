
var express = require("express");
const server = express();//Main app
const admin = express();//sub app

//It is used to use all the post, get , put http method in a single route

server.route('/events')
    .get((req,res)=>{
      res.send("Welcome to the application home get");
    })
    .post((req,res)=>{
      res.send("Welcome to the application home post");
    })
    .put((req,res)=>{
      res.send("Welcome to the application put");
    });


server.listen(8080, () => {
  console.log("Server Started");
});
