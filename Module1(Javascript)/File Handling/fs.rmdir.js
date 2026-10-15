//fs.rmdir() — Remove a Directory.Removes an empty directory.

const fs = require('fs');

fs.rmdir('myfolder', (err) => {
    if (err) throw err;

    console.log('Folder removed successfully!');
});
