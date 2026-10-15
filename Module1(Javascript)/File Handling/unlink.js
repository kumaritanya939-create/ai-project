// fs.unlink() — Delete a File

const fs = require('fs');

fs.unlink('newnotes.txt', (err) => {
    if (err) throw err;

    console.log('File deleted successfully!');
});

/*'newnotes.txt' is the file to delete.
fs.unlink() removes the file from the filesystem.
If the file doesn't exist or deletion fails, an error is returned to the callback.*/