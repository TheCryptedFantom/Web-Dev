// =====================================
// 1. TOGGLE THEME (Click Event)
// =====================================

// Find the theme button by its ID
const themeButton = document.getElementById("themeToggle");

// Listen for a click event
themeButton.addEventListener("click", () => {

  // Toggle the dark class on the body
  document.body.classList.toggle("dark");

  console.log("Theme changed!");
});


// =====================================
// 2. ADD ITEMS TO THE LIST
// =====================================

// Find the Add Item button and list
const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");

// Keep track of item numbers
let counter = 1;

// Listen for clicks on the Add Item button
addBtn.addEventListener("click", () => {

  // Create a new list item
  const newItem = document.createElement("li");

  // Give the new item text
  newItem.textContent = "Mystery Item " + counter;

  // Add the item to the list
  list.appendChild(newItem);

  // Increase the counter
  counter++;
});


// =====================================
// 3. REMOVE ITEMS (Event Delegation)
// =====================================

// Listen for clicks on the entire list
list.addEventListener("click", (event) => {

  // Check if the clicked element is a list item
  if (event.target.tagName === "LI") {

    // Remove the clicked list item
    event.target.remove();

    console.log("Item removed!");
  }
});


// =====================================
// 4. KEYBOARD INPUT EVENT
// =====================================

// Find the paragraph that displays keyboard input
const keyOutput = document.getElementById("keyOutput");

// Listen for keyup events on the document
document.addEventListener("keyup", (event) => {

  // Display the key that was pressed
  keyOutput.textContent = "You pressed: " + event.key;
});
