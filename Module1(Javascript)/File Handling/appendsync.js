// fs.appendFileSync() — Synchronous Append


const fs = require('fs');

fs.appendFileSync('notes.txt', '\nWelcome to Node.js!');

console.log('Data appended successfully!');
console.log('Program continues...');

/*appendFileSync() adds the text to the end of the file.

It blocks execution until the operation finishes.

The next statement runs only after the append operation succeeds.*/