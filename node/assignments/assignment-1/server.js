import http from 'http';
import url from 'url';
import { getHome, getUrl, error } from './routes/handler.js';
import logger from './events/requestEvent.js';
const server=http.createServer((req,res)=>{
    logger.emit('logRequest',req.url,req.method);

    const parsedUrl=url.parse(req.url,true);
    const path=parsedUrl.pathname;

    if(path === '/' && req.method === "GET"){
        getHome(res);
    }
    else if (path === '/api/user' && req.method === 'GET') {
        getUrl(req,res);
    } else{
        error(res);
    }
}).listen(3001,()=>{
    console.log('server start...');
})

