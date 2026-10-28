
// Example 1: Click event changes the background color
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});


// Example 2: Double-click event changes the button text
const dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick", () => {
    dblBtn.textContent = "Achievement Unlocked!";
});


// Example 3: Mouseover event changes the text color
const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", () => {
    hoverText.style.color = "red";
});


// Example 4: Mouseout event restores the original text color
hoverText.addEventListener("mouseout", () => {
    hoverText.style.color = "black";
});


// Example 5: Input event displays what the user types
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

textInput.addEventListener("input", () => {
    output.textContent = "Your gamer tag: " + textInput.value;
});
