const fs=require("fs");
const EventEmitter=require("events");
const emitter=new EventEmitter();
const readline=require("readline");

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


emitter.on("noteAdd",(note)=>{
    console.log(`note added : ${note}`);
});

function addNote(note){
    fs.appendFile('note.txt',note + " ",(err)=>{
        if(err){
            console.log("error write :",err);
            return
        }
        emitter.emit('noteAdd',note);
    })
};

function readNotes() {
    fs.readFile('note.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log('Error reading notes:', err);
            return;
        }
        console.log('All Notes:' + data);
    });
}; 

function ask(){
    r1.question("choose:[1] add note [2] read note [3]exit:",(choice)=>{
        if(choice === '1'){
            r1.question('enter note:',(note)=>{
                addNote(note);
            });
        } 
         else if(choice === '2'){
            readNotes();
            }
            else if(choice === '3'){
                console.log("bye");
                r1.close();
            }
            else{
                console.log("invalid");
                ask();
            }
    })
}
ask();
