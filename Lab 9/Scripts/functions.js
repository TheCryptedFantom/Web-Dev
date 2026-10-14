// Asks the user for their name and calls the greeting function.
let userName = prompt("What is your name?");
greetUser(userName);

// Asks the user for two numbers and calls the addition function.
let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));
let sum = addNumbers(firstNumber, secondNumber);
console.log("The sum is: " + sum);

// Asks the user for the length and width and calls the area function.
let length = Number(prompt("Enter the rectangle's length:"));
let width = Number(prompt("Enter the rectangle's width:"));
let area = calculateArea(length, width);
console.log("The area of the rectangle is: " + area);

// Defines a function that greets a user by name using console.log().
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// Defines a function that returns the sum of two numbers.
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Defines a function that returns the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
}
