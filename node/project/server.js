const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {

    if (req.url === "/") {

        const filepath = path.join(__dirname, "pages", "home.html")
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'content-type': 'text/html' });
                return res.end("eroor-500")
            }
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        })
    } else if (req.url === "/about") {
        const filepath = path.join(__dirname, "pages", "about.html")
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'content-type': 'text/html' });
                return res.end("eroor-500")
            }
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        })
    }
    else {
        res.statusCode = 404;
        res.end("error")
    }

}).listen(5000, () => console.log("server started"))