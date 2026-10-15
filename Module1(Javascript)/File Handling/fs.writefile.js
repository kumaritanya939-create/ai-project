//Import the fs Module(Asynchronous)
const fs = require('fs');

fs.writeFile('notes.txt', 'Hello Node!', (err) => {
    if (err) throw err;

    console.log('File saved!');
});

console.log('Program continues...');