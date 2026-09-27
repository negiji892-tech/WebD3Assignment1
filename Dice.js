// Random Dice Generator using Node.js built-in crypto module
// Usage: node dice.js          -> single roll
//        node dice.js 3        -> roll 3 times

const crypto = require('crypto');

console.log('=== Smart Utility Toolkit: Random Dice Generator ===\n');

// Get number of rolls from command line (default is 1)
const numRolls = Number(process.argv[2]) || 1;

// Function to generate a random dice value between 1 and 6 using crypto
function rollDice() {
    // crypto.randomInt generates a secure random integer
    // range: min = 1, max = 7 (exclusive), so result is 1-6
    const randomValue = crypto.randomInt(1, 7);
    return randomValue;
}

console.log(`Rolling the dice ${numRolls} time(s):`);

// Loop to roll the dice multiple times
for (let i = 0; i < numRolls; i++) {
    const diceValue = rollDice();
    console.log(`Dice Rolled: ${diceValue}`);
}

console.log('\n-----------------------------------------');
console.log('Dice simulation finished.');
