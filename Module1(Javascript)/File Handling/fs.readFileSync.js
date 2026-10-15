/*Synchronous Reading
fs.readFileSync() reads the file and blocks execution until reading finishes.
The returned content is stored in the data variable.
The next statement runs only after the file has been read successfully.
If reading fails, it throws an error unless handled with try...catch.*/


const fs = require('fs');

const data = fs.readFileSync('notes.txt', 'utf8');

console.log(data);
console.log('Program continues...');
