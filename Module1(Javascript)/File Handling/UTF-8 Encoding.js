/*UTF-8 Encoding?
UTF-8 is a character encoding format that converts stored bytes into readable text.*/
const fs = require('fs');

const data = fs.readFileSync('notes.txt', 'utf8');//UTF-8 encoding returns a string:

console.log(data);
console.log('Program continues...');

