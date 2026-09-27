// Custom reusable module using module.exports
// This module checks whether a number is even or odd

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exporting the function so it can be used in other files with require()
module.exports = isEven;
