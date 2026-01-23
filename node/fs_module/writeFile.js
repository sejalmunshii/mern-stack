const fs = require("fs");
fs.writeFileSync('notes.txt', 'Hello Node.js');
fs.writeFile('notes.txt', 'write hello sejal', (err) => {
    if (err) throw err;
    console.log("File Written");
});