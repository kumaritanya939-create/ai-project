// fs.appendFile() — Asynchronous Append

const fs = require('fs');

fs.appendFile('notes.txt', '\nHello Again!', (err) => {
    if (err) throw err;

    console.log('Data appended successfully!');
});

console.log('Program continues...');

/*notes.txt is the file to update.
'\nHello Again!' adds a new line followed by the text.
The callback runs when the append operation finishes.
The program continues without waiting for the file operation to complete.*/

