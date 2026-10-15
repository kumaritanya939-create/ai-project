// fs.mkdir() — Create a Directory(Creates a new folder.)

const fs = require('fs');

fs.mkdir('myfolder', (err) => {
    if (err) throw err;

    console.log('Folder created successfully!');
});
/*'myfolder' is the name of the new directory.

The callback runs after the operation completes.

If the folder already exists, an error may occur.*/