// Import the readline module to handle user input 
const readline = require('readline');

// Create an interface to read from the standard input (stdin) and write to the standard output (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input and perform the desired operations
const calculate = () => {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            // Convert input values to numbers
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            
            if (isNaN(number1) || isNaN(number2)) {
                console.log('Both inputs must be valid numbers.');
                rl.close();
                return;
            }

            // Perform multiplication and division
            const multiplication = number1 * number2;
            const division = number2 !== 0 ? number1 / number2 : 'undefined (cannot divide by zero)';

            // Output the results
            console.log(`Multiplication: ${number1} * ${number2} = ${multiplication}`);
            console.log(`Division: ${number1} / ${number2} = ${division}`);

            // Close the readline interface
            rl.close();
        });
    });
};

// Call the calculate function to start the program
calculate();
