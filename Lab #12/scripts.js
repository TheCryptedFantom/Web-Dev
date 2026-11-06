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
const consoleButton = document.getElementById("consoleButton");

consoleButton.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const color = document.getElementById("color").value;

    console.log("Questions and Answers:");
    console.log("What is your name? " + name);
    console.log("What is your email? " + email);
    console.log("What is your message? " + message);
    console.log("What is your favorite color? " + color);
});