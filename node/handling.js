let http=require("http");

http.createServer((req,res)=>{

    if(req.url === "/"){
        if(req.method === "get"){
            res.end("get method")
        }else if(req.method === "post"){
            res.end("post method")
        }
        res.end("home page")
    } else if(req.url === "/about"){
        res.end("about")
    }
    else{
        res.statusCode=404;
        res.end("error")
    }

}).listen(5000,()=> console.log("server started"))
