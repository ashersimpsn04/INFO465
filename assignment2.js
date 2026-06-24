const readline = require('readline');

// set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbers = []; // array to store user input 
console.log ("Please enter integers one at a time. Type 'q' to quit and evaluate.");

// function to prompt user input 
function promptUser() {
    rl.question("Enter an integer (type 'q' to quit): ", (input) => {
        const trimmedInput = input.trim();

        //check for quit command
        if (trimmedInput.toLowerCase() === 'q') {
            echoAndEvaluate();
            rl.close();
            return;
        }

        // validate input
        const integerRegex = /^-?\d+$/;
        if (!integerRegex.test(trimmedInput)) {
            console.log("Error: invalid input. Please enter a valid integer.");
            promptUser(); // prompt again after error 
            return;
        }

        //convert input to number and add to array
        const num = parseInt(trimmedInput, 10);
        numbers.push(num);
        promptUser(); // prompt again for next input
    });
}

// echoes the integers input and evaluates math condition
function echoAndEvaluate() {
    // echo numbers to user
    console.log('/nYou entered: [${numbers.join(', ')}]');

    // check if there are enough numbers to evaluate
    if (numbers.length < 3) {
        console.log("Not enough numbers to evaluate. Please enter at least 3 integers.");
        return;
    }

    let conditionMet = false;

    // triple loop to check if any 2 numbers multiply to = a third
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) continue; // skip if multiplying itself

            for (let k = 0; k < numbers.length; k++) {
                if (k === i || k === j) continue; // target needs to be different 

                if (numbers[i] * numbers[j] === numbers[k]) {
                    console.log(`Condition met: ${numbers[i]} * ${numbers[j]} = ${numbers[k]}`);
                    conditionMet = true;
                    return; // exit after first match
                }
            }
        }
    }
// fall back if no combinations 
    if (!conditionMet) {
        console.log("Condition not met.");

    }
}

// start loop 
promptUser();
