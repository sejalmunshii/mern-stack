import EventEmitter from 'events';
import fs from 'fs';
const logger=new EventEmitter();

logger.on('logRequest',(url,method)=>{
    const log=`url : ${url}, method :${method}`;
    console.log(log);

    fs.appendFile('logs.txt',log,(err)=>{
        if(err){
            console.log("error in log",err);
        }
    })
})

export default logger;