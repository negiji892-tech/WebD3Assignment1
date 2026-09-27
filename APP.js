
const isEven = require('./isEven');

console.log('=== Smart Utility Toolkit: Custom Module Demo ===\n');


const number1 = 4;
if (isEven(number1)) {
    console.log(`${number1} is an even number.`);
} else {
    console.log(`${number1} is an odd number.`);
}

const number2 = 7;
if (isEven(number2)) {
    console.log(`${number2} is an even number.`);
} else {
    console.log(`${number2} is an odd number.`);
}

const cliNumber = Number(process.argv[2]);
if (!isNaN(cliNumber)) {
    if (isEven(cliNumber)) {
        console.log(`${cliNumber} is an even number.`);
    } else {
        console.log(`${cliNumber} is an odd number.`);
    }
}

console.log('-----------------------------------------');
console.log('Demo finished. The isEven module is reusable in any file.');
