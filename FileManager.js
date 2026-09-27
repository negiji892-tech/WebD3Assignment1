// Simple File Manager using Node.js built-in fs module
// Usage: node fileManager.js
// Demonstrates: writeFile (create), readFile (read), appendFile (update), unlink (delete)

const fs = require('fs');

const fileName = 'notes.txt';

console.log('=== Smart Utility Toolkit: File Manager ===\n');

// 1. CREATE FILE - writeFile()
console.log('1. Creating file...');
fs.writeFile(fileName, 'Hello, this is my first note.\n', (err) => {
    if (err) {
        console.log('Error creating file:', err.message);
    } else {
        console.log(`File "${fileName}" created successfully.`);

        // 2. READ FILE - readFile()
        // Note: this is asynchronous, it runs after writeFile completes
        console.log('\n2. Reading file...');
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err.message);
            } else {
                console.log('File contents:');
                console.log(data);

                // 3. UPDATE FILE - appendFile()
                console.log('\n3. Updating file (appending)...');
                fs.appendFile(fileName, 'This is an added second line.\n', (err) => {
                    if (err) {
                        console.log('Error updating file:', err.message);
                    } else {
                        console.log('File updated successfully.');

                        // Read again to show the updated content
                        console.log('\nReading updated file...');
                        fs.readFile(fileName, 'utf8', (err, data) => {
                            if (err) {
                                console.log('Error reading file:', err.message);
                            } else {
                                console.log('Updated file contents:');
                                console.log(data);

                                // 4. DELETE FILE - unlink()
                                console.log('4. Deleting file...');
                                fs.unlink(fileName, (err) => {
                                    if (err) {
                                        console.log('Error deleting file:', err.message);
                                    } else {
                                        console.log(`File "${fileName}" deleted successfully.`);
                                    }
                                    console.log('\nFile Manager operations complete.');
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

// Demonstrate handling a missing file error
console.log('\n=== Testing missing file handling ===');
fs.readFile('does-not-exist.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Missing file error handled gracefully:', err.message);
    } else {
        console.log(data);
    }
});
