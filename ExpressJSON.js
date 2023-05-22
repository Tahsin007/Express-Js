
const fs=require('fs');
const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.JSON','utf-8'));
const product=data.products;


const express=require('express');
const server=express();


server.use(express.json());

server.get('/',(req,res)=>{
  res.send("Hello");
  //res.sendFile('C:\Users\TANIM\Desktop\Node\new\index.html');
  // res.json(product);
  //res.sendStatus(404);
});
server.get('/about',(req,res)=>{
  res.send("This is the about page");
});
server.get('/contact',(req,res)=>{
  console.log(req.body.name);
  res.send("This is the contact page");
});

server.post('/',(req,res)=>{
  res.send('Hello2');
})



server.listen(8080,()=>{
  console.log("Server Started");

});

