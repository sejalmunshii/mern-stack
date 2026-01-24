const EventEmitter=require("events");
const emitter=new EventEmitter();

emitter.on("greet",(username)=>{
    console.log(`\n hello ${username}!`);
});

const username=process.argv[2];

if(username){
    emitter.emit("greet",username);
}
else{
    console.log("please enter your name")
}

