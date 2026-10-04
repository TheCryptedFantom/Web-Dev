// Get two numbers from the user when the page loads
let startNumber = Number(prompt("Enter a starting number:"));
let endNumber = Number(prompt("Enter an ending number:"));

console.log("Counting from " + startNumber + " to " + endNumber + ":");

// Loop #1: Counts from the starting number to the ending number
for (let i = startNumber; i <= endNumber; i++) {

    // Check if each number is even or odd
    if (i % 2 === 0) {
        console.log(i + " - Even");
    } else {
        console.log(i + " - Odd");
    }
}

// Loop #2: Creates a countdown
console.log("Countdown:");

let countdown = endNumber;

while (countdown >= startNumber) {
    console.log(countdown);
    countdown--;
}