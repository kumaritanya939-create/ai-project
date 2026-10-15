
const fs = require('fs');

fs.unlinkSync('newnotes.txt');

console.log('File deleted successfully!');

//unlinkSync() deletes the file and blocks execution until the operation finishes.