const http=require("http");
const fs=require('fs');
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>{
    console.log("request path:",req.url);
    console.log("request method:",req.method);
    console.log("request header:",req.headers);

    if(req.url==='/' && req.method==='GET'){
        fs.readFile('form.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading form');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (req.url==='/submit' && req.method==='POST'){
        let body='';

        req.on('data',(chunk)=>{
            body +=chunk;
        });
        req.on('end',()=>{
            console.log("body data",body);
            res.statusCode=200;
            res.setHeader('content-type','application/json');
            res.end(JSON.stringify({message:'this is the message',data:body}));
        })

    }
     else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Page Not Found');
    }
})
server.listen(3000,()=>{
    console.log('server is running...');
})