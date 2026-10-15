//fs.readdir() — Read Directory Contents.Lists the files and subfolders inside a directory.

const fs = require('fs');

fs.readdir('myfolder', (err, files) => {
    if (err) throw err;

    console.log(files);
});

/*'myfolder' is the directory to inspect.
files is an array containing the names of its entries.
The operation is asynchronous.*/