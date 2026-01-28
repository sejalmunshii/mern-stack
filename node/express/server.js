const express =require('express');
const path=require('path');

const app =express();
const PORT=3000;

app.listen(PORT,()=>{
    console.log("server is started");
  
});

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,"home.html"))
    
})
;

app.get('/about',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,"about.html"))
    
})
;

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,"index.html"))
    res.send("hello word");
    
})
;
app.get('/login',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,"login.html"))
    
})
;