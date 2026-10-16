// Function 1: Takes no parameters.
// It welcomes the user and explains what the program does.
function welcomeUser() {
    console.log("Welcome to the Multiplication Table Generator!");
    console.log("Enter a number to see its multiplication table.");
}

// Function 2: Accepts parameters and returns a value.
// It multiplies two numbers and returns the result so it can be reused.
function multiply(number, multiplier) {
    return number * multiplier;
}

// Function 3: Accepts user input and contains a loop.
// It calls the multiply() function instead of repeating the math.
function generateTable(number) {
    console.log("Multiplication table for " + number + ":");

    // The loop repeats 10 times to create the multiplication table.
    for (let i = 1; i <= 10; i++) {

        // A conditional checks whether the multiplier is even or odd.
        if (i % 2 === 0) {
            console.log(
                number + " x " + i + " = " + multiply(number, i)
                + " (even multiplier)"
            );
        } else {
            console.log(
                number + " x " + i + " = " + multiply(number, i)
                + " (odd multiplier)"
            );
        }
    }
}

// Get input from the user and convert it into a number.
let userNumber = Number(prompt("Enter a number for your multiplication table:"));

// Call the function that takes no parameters.
welcomeUser();

// Check that the input is a valid number before generating the table.
if (Number.isFinite(userNumber) && userNumber > 0) {
    generateTable(userNumber);
} else {
    console.log("Please enter a valid positive number.");
}
