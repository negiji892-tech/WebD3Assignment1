
console.log('=== Smart Utility Toolkit: CLI Calculator ===\n');

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

console.log('Operation requested:', operation);
console.log('First number:', num1);
console.log('Second number:', num2);
console.log('-----------------------------------------');

// Check if all required arguments are provided
if (!operation || num1 === null || num2 === null || process.argv[3] === undefined || process.argv[4] === undefined) {
    console.log('Error: Please provide an operation and two numbers.');
    console.log('Example: node calculator.js add 10 5');
} else if (isNaN(num1) || isNaN(num2)) {
    // Check if inputs are valid numbers
    console.log('Error: Please enter valid numbers.');
} else {
    let result;

    // Perform the requested operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            console.log(`Result of ${num1} + ${num2} = ${result}`);
            break;
        case 'subtract':
            result = num1 - num2;
            console.log(`Result of ${num1} - ${num2} = ${result}`);
            break;
        case 'multiply':
            result = num1 * num2;
            console.log(`Result of ${num1} * ${num2} = ${result}`);
            break;
        case 'divide':
            if (num2 === 0) {
                console.log('Error: Cannot divide by zero.');
            } else {
                result = num1 / num2;
                console.log(`Result of ${num1} / ${num2} = ${result}`);
            }
            break;
        default:
            // Handle invalid operations gracefully
            console.log('Error: Invalid operation. Please use add, subtract, multiply, or divide.');
    }
}

console.log('-----------------------------------------');
console.log('Calculator finished.');
