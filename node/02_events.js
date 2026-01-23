const EventEmitter=require("events");

const emitter= new EventEmitter();

const readLine=require("readline");

const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

emitter.on("greet",(name)=>{
    console.log(`\n hello ${name},event triggered`);
})

r1.question("enter your name: ",(username)=>{
    emitter.emit("greet",username);
    r1.close();
})