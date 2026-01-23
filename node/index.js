let http=require("http");

http.createServer((req,res)=>{
    res.end("heelo seejall");
    console.log("url",req.url)
    console.log("method",req.method)
    console.log("header",req.headers)
}).listen(5000,()=> console.log("server started"))

