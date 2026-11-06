// Select the form and result section
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", function(event) {

    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const color = document.getElementById("color").value;

    // Display the info back to the user
    result.innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;
});

// Listen for console button click
const answersButton = document.getElementById("answersButton");

answersButton.addEventListener("click", function() {
    console.log("PART 4 — ANSWERS");

    console.log("1. What do IDs do?");
    console.log("IDs give HTML elements unique names so JavaScript and CSS can find and identify specific elements.");

    console.log("2. Why must your <script> tag be at the end of <body>?");
    console.log("Placing the script at the end allows the HTML elements to load before JavaScript tries to access them.");

    console.log("3. What does event.preventDefault() actually prevent?");
    console.log("It prevents the browser's default action when an event occurs. In this assignment, it prevents the form from refreshing the page when submitted.");

    console.log("4. What does .value return?");
    console.log("It returns the current value entered into an input or textarea.");

    console.log("5. Why use template literals (${}) instead of string concatenation?");
    console.log("Template literals make it easier to combine text and variables. They also make longer strings containing HTML easier to read.");
});