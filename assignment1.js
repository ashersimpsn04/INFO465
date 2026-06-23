const readline = require('readline');

// interface set up 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
const numbers = [];

console.log("Integer Calculator")
console.log("Enter integers. type 'q' to quit. press Enter to continue./n")

function askForNumber() {
    rl.question("Enter an Integer ('q' to quit): ", (input) => {    
const trimmedInput = input.trim(); 
// check if user wants to quit
        if (trimmedInput.toLowerCase()=== 'q') {
            calculateStatistics();
            rl.close(); //close interface
            return;
        }
// parse input to integer
        const number = parseInt(trimmedInput, 10);
// error handling for invalid input
        if (isNaN(number)) {
            console.log("Invalid input. Please enter a valid integer.");
            askForNumber(); // ask for input again
            return;
        }
// loop back to prompt for next number
        numbers.push(number);
        askForNumber();
    });
}

function calculateStatistics() {
    console.log("Results:");

    const count = numbers.length;
    console.log('Count (number of integers entered):', count);

    //edge case handling for no data
    if (count === 0) {
        console.log("No integers were entered.");
        return;
    }
// min max calculations
const min = Math.min(...numbers);
const max = Math.max(...numbers);

// mean calculation
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const mean = sum / count;
//median calculation
const sortedNumbers = [...numbers].sort((a, b) => a - b);
let median;
const midIndex = Math.floor(count / 2);
if (count % 2 === 0) {
    median = (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
} else {
    median = sortedNumbers[midIndex];
}

// display results
console.log('Minimum:', min);
console.log('Maximum:', max);
console.log('Mean:', mean.toFixed(2));
console.log('Median:', median);
}

//execute app
askForNumber();