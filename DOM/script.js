// A) Select and Modify Text
// Finds the element with ID "title"
const title = document.getElementById("title");
// Replaces the text inside <h1>
title.textContent = "Hello from JavaScript!";
/*
Explanation:

    document = the entire webpage loaded in memory.

    .getElementById("title") = looks through the document and finds the element with that ID.

    const title stores a reference to that element so we can modify it.

    .textContent changes what’s displayed between <h1> and </h1>.
*/
// B) Change Styles with JavaScript
// Change color and font style dynamically
title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";
/*
Explanation:

    .style accesses the inline CSS styles for that element.

    You can directly assign new values (e.g. "blue", "Arial").

    These changes happen immediately when the script runs.
*/
// C) Select Using a CSS Selector
// Selects the first element with class "main"
const mainSection = document.querySelector(".main");
// Add a light gray background color
mainSection.style.backgroundColor = "#f0f0f0";
/*
Explanation:

    .querySelector() works just like a CSS selector — #id, .class, or tag name (p).

    It only selects the first match.

    Here, we’re changing the background color of the <main> area.
*/
// D) Select Multiple Elements with querySelectorAll()
// Selects all <p> elements in the document
const paragraphs = document.querySelectorAll("p");
// Loop through each paragraph and update text + color
paragraphs.forEach((p, i) => {
p.textContent = `Paragraph ${i + 1} updated by JS`;
p.style.color = "green";
});
/*
Explanation:

    .querySelectorAll("p") grabs every paragraph tag on the page and stores them in a NodeList (like an array).

    .forEach() loops through each paragraph (p) and applies changes.

    i is the index (0, 1, 2), so we add 1 to show “Paragraph 1,” “Paragraph 2,” etc.

    Each paragraph turns green and its text updates dynamically.
*/
// E) Add Interactivity with a Button
// Select the button by ID
const toggleButton = document.getElementById("toggle");
// Wait for a click, then toggle a class on the <body>
toggleButton.addEventListener("click", () => {
document.body.classList.toggle("highlight");
});

/*Explanation:

    .addEventListener("click", …) listens for the user’s click event.

    When clicked, it runs the arrow function () => { ... }.

    .classList.toggle("highlight") adds the class if it’s missing, or removes it if it’s already there.

    This causes the background to change since .highlight is defined in your <style> tag.
*/
// F) Create and Append New Elements
// Create an array of link data
const resources = [
{ text: "CSI", href: "https://www.csi.edu" },
{ text: "MDN Web Docs", href: "https://developer.mozilla.org" },
{ text: "Eloquent JavaScript", href: "https://eloquentjavascript.net" }
];
// Select the <ul> where links will go
const list = document.getElementById("links");
// Clear existing list items (if any)
list.innerHTML = "";
// Loop through each resource and build list items
for (const item of resources) {
const li = document.createElement("li"); // create a <li>
const a = document.createElement("a"); // create an <a>
a.textContent = item.text; // set link text
a.href = item.href; // set link destination
a.target = "_blank"; // open in new tab
li.appendChild(a); // add <a> inside <li>
list.appendChild(li); // add <li> to the <ul>
}

/*Explanation:

    We’re programmatically building new HTML elements in memory.

    createElement() makes new tags.

    .appendChild() places them in the DOM (so they show on the page).

    a.target = "_blank" ensures links open in a new tab.

    list.innerHTML = "" clears old content before adding new items.
*/