/*(Asynchronous Reading)
fs.readFile() reads the file without blocking the main JavaScript execution.

'notes.txt' is the file to read.

'utf8' converts the file's contents into a readable string.

err contains an error if reading fails.

data contains the file's contents if reading succeeds.*/

const fs = require('fs');

fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
});

console.log('Program continues...');



