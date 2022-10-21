const fs = require('fs');

// Assigns the third string from the CMD to [folderName].
// If no string is given, [folderName] defaults to [Project].
const folderName = process.argv[2] || 'Project';

// Make a new folder

// Asynchronous
// fs.mkdir('Dogs', { recursive: true }, (error) => {
//     if (error) throw error;
// });

// Synchronous
fs.mkdirSync('Cats');


try {
    fs.mkdirSync(folderName);
    // Make/Write to a new file
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/styles.css`);
    fs.writeFileSync(`${folderName}/app.js`);
} catch (error) {
    console.log(error);
}

console.log('I come after MKDIR.');