
const fs = require('fs');

fs.rename('notes.txt', 'newnotes.txt', (err) => {
    if (err) throw err;

    console.log('File renamed successfully!');
});
/*notes.txt' is the original filename.
'newnotes.txt' is the new filename.
The callback executes when the operation finishes.
The file's contents remain unchanged; only its name or path changes.*/