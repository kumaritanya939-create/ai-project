//This code reads notes.txt synchronously, but because you haven't specified 'utf8', 
// Node.js returns the file contents as a Buffer object instead of a normal text string.

const fs = require('fs');

const data = fs.readFileSync('notes.txt');
console.log(data);
