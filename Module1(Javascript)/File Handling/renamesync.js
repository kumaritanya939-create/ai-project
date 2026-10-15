
const fs = require('fs');

fs.renameSync('notes.txt', 'newnotes.txt');

console.log('File renamed successfully!');

//renameSync() renames the file and blocks execution until the operation finishes.