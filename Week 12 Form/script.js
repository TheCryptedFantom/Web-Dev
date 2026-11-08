
// Get references to the form and results section.
const form = document.getElementById("serviceForm");
const results = document.getElementById("results");
const resultContent = document.getElementById("resultContent");

// Listen for the form submission.
form.addEventListener("submit", function(event) {

    // Prevent the browser from reloading the page.
    event.preventDefault();

    // Collect all the information entered into the form.
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const date = formData.get("date");
    const issue = formData.get("issue");
    const priority = formData.get("priority");
    const details = formData.get("details");

    // Collect all checked service options.
    const services = formData.getAll("services");

    // Clear any previous submission results.
    resultContent.replaceChildren();

    // Store the submitted information with labels.
    const entries = [
        ["Full Name", name],
        ["Email Address", email],
        ["Computer Age", age + " years"],
        ["Preferred Date", date],
        ["Main Issue", issue],
        ["Requested Services", services.length ? services.join(", ") : "None selected"],
        ["Priority", priority],
        ["Problem Description", details]
    ];

    // Create a separate result element for every entry.
    entries.forEach(function(entry) {
        const paragraph = document.createElement("p");
        paragraph.className = "result-item";

        const label = document.createElement("strong");
        label.textContent = entry[0] + ": ";

        const value = document.createTextNode(entry[1]);

        paragraph.append(label, value);
        resultContent.appendChild(paragraph);
    });

    // Display the results after submission.
    results.style.display = "block";

    results.scrollIntoView({ behavior: "smooth" });
});
