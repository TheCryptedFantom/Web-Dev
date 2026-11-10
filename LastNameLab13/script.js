
// Select the form and input elements from the HTML
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

// Select the error and success message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const successMessage = document.getElementById("successMessage");

// Regular expression used to validate email addresses
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Function to validate the Name field
function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}


// Function to validate the Email field
function validateEmail() {

    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}


// Function to validate the Age field
function validateAge() {

    const age = Number(ageInput.value);

    if (ageInput.value.trim() === "") {
        ageError.textContent = "Please enter your age.";
        return false;
    } else if (!Number.isFinite(age) || age < 1) {
        ageError.textContent = "Age must be a number of at least 1.";
        return false;
    } else {
        ageError.textContent = "";
        return true;
    }
}


// Add blur event listeners to validate fields when users leave them
nameInput.addEventListener("blur", validateName);

emailInput.addEventListener("blur", validateEmail);

ageInput.addEventListener("blur", validateAge);


// Add an event listener for form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent the browser from refreshing the page
    event.preventDefault();

    // Validate all three fields
    const validName = validateName();
    const validEmail = validateEmail();
    const validAge = validateAge();

    // Check whether every field is valid
    if (validName && validEmail && validAge) {

        // Display the success message
        successMessage.textContent = "Form submitted successfully!";

        // Clear the form inputs
        contactForm.reset();

        // Clear any remaining error messages
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";

    } else {

        // Remove the success message if validation fails
        successMessage.textContent = "";
    }

});
