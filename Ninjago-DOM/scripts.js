
console.log("Ninjago DOM homework loaded!");

// Select the main page elements.
const titleEl = document.getElementById("ninjagoTitle");
const mainEl = document.getElementById("ninjaMain");
const introEl = document.getElementById("ninjaIntro");

// Update the page title and welcome message.
titleEl.textContent = "Ninjago — Masters of Spinjitzu";
introEl.textContent = "Choose your ninja and discover their elemental power!";

// Select the ninja image.
const imgEl = document.getElementById("ninjaImage");

// Update the image and its alternative text.
imgEl.src = "https://placehold.co/600x300/b5121b/ffffff?text=MASTER+OF+SPINJITZU";
imgEl.alt = "Master of Spinjitzu title graphic";

// Store the ninja roster and their elemental powers.
const ninjaTeam = [
    { name: "Kai", element: "Fire", weapon: "Sword" },
    { name: "Jay", element: "Lightning", weapon: "Nunchucks" },
    { name: "Cole", element: "Earth", weapon: "Scythe" },
    { name: "Zane", element: "Ice", weapon: "Shurikens" },
    { name: "Lloyd", element: "Energy", weapon: "Sword" },
    { name: "Nya", element: "Water", weapon: "Water powers" }
];

// Select the roster list.
const rosterEl = document.getElementById("ninjaRoster");

// Clear any existing list items.
rosterEl.innerHTML = "";

// Create a list item for every ninja.
ninjaTeam.forEach((ninja) => {
    const ninjaItem = document.createElement("li");

    ninjaItem.textContent =
        `${ninja.name} — Element: ${ninja.element} | Weapon: ${ninja.weapon}`;

    rosterEl.appendChild(ninjaItem);
});

// Select the Spinjitzu button.
const highlightBtn = document.getElementById("highlightButton");

// Toggle the highlight effect when clicked.
highlightBtn.addEventListener("click", () => {
    mainEl.classList.toggle("ninja-highlight");
    console.log("Spinjitzu toggled!");
});

// Select the image-swap button.
const swapBtn = document.getElementById("swapImageButton");

// Track which display is currently active.
let alternateDisplay = false;

// Swap the image and its alternative text on each click.
swapBtn.addEventListener("click", () => {
    if (alternateDisplay === false) {
        imgEl.src =
            "https://placehold.co/600x300/146b35/ffffff?text=GREEN+NINJA";
        imgEl.alt = "Green Ninja title graphic";
        alternateDisplay = true;
        console.log("Swapped to Green Ninja display.");
    } else {
        imgEl.src =
            "https://placehold.co/600x300/b5121b/ffffff?text=MASTER+OF+SPINJITZU";
        imgEl.alt = "Master of Spinjitzu title graphic";
        alternateDisplay = false;
        console.log("Swapped back to Master of Spinjitzu display.");
    }
});

// Find the challenge paragraph.
const challengeEl = document.getElementById("elementalChallenge");

// Check whether the paragraph exists.
console.log("Challenge element:", challengeEl);

if (challengeEl) {
    challengeEl.textContent = "The power of the ninja is within you!";
    challengeEl.style.color = "#f5c542";
} else {
    console.error("Challenge paragraph not found in HTML!");
}
