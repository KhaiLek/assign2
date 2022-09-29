const express = require('express');
const path = require('path');


const app = express()

app.get("/Myanmar",(req,res)=>{
  res.sendfile(path.join(__dirname+'/myanmar.html'));
})

app.get("/Jlkhai",(req,res)=>{
  res.sendfile(path.join(__dirname+'/jlKhai.html'));
})

app.get("/NCCclass",(req,res)=>{
  res.sendfile(path.join(__dirname+'/nccclass.html'));
})

app.listen(3000,()=>{
  console.log('server starting up at: port:3000:')
})