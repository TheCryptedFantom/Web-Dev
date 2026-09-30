let firstName = "Trenton";
let lastName = "Roach";
let favoriteGame = "Minecraft";
let otherFavoriteGame = "Ark: Survival Evolved";
let age = 17;
let gamesOwnedOnSteam = 61;
let gamesOwnedOnPlaystation = 51;
let totalGamesOwned = gamesOwnedOnSteam + gamesOwnedOnPlaystation;
let isGamer = true;

// String concatenations
console.log("My name is " + firstName + " " + lastName + " and I am " + age + " years old.");
console.log("My favorite games are " + favoriteGame + " and " + otherFavoriteGame);

// Math operations
console.log("Games owned on Steam after buying 5 more: " + (gamesOwnedOnSteam + 5));
console.log("Games owned on PlayStation after buying 5 more: " + (gamesOwnedOnPlaystation + 5));
console.log("My age in 5 years: " + (age + 5));

// Boolean
console.log("Am I a gamer? " + isGamer);

// Finds the HTML element with the id "content" and appends a paragraph to its existing content.
document.getElementById("content").innerHTML += "<p>I currently own " + gamesOwnedOnSteam + " games on Steam and " + gamesOwnedOnPlaystation + " games on PlayStation. I enjoy"
                + " playing a letiety of games, from action-packed shooters to relaxing"
                + " simulation games. Each game offers a unique experience and allows me"
                + " to explore different worlds and stories.</p>";

// Finds the same "content" element and appends another paragraph showing the total number of games.
document.getElementById("content").innerHTML += "<p>That makes a total of " + totalGamesOwned + " games owned not counting Epic Games.</p>";

// Ask the user for 3 values with prompt().
let gameLibrarySize = Number(prompt("How many games do you currently own?"));
let platform = prompt("What's your main gaming platform? (PC, PlayStation, Xbox, Switch)");
let playsOnline = prompt("Do you play games online with friends? (yes/no)").toLowerCase();

// Rule 1: Backlog size check
if (gameLibrarySize >= 50) {
  console.log("Whoa, " + gameLibrarySize + " games? You've got a serious backlog to get through.");
} else if (gameLibrarySize >= 20) {
  console.log("You've got a decent library of " + gameLibrarySize + " games.");
} else {
  console.log("Only " + gameLibrarySize + " games? Might be time to grab a sale!");
}

// Rule 2: Platform check
if (platform === "PC") {
  console.log("PC gaming gives you the most flexibility for mods and upgrades.");

  if (gameLibrarySize >= 50) {
    console.log("With that many games on PC, keep an eye out - Steam sales will only grow your backlog!");
  }
} else if (platform === "PlayStation" || platform === "Xbox") {
  console.log("Consoles like " + platform + " are great for exclusives and easy multiplayer setup.");
} else if (platform === "Switch") {
  console.log("The Switch is perfect for gaming on the go.");
} else {
  console.log("Not sure I recognize that platform, but happy gaming either way!");
}

// Rule 3: Online play check
if (playsOnline !== "yes") {
  console.log("You mostly play solo - single-player and story-driven games might suit you best.");
} else {
  console.log("Since you play online, competitive and co-op games are probably right up your alley.");
}



// =============================================
// Task 1: Counting Loop
// A for loop starts a counter (i) at 1, keeps looping while
// i <= 10, and adds 1 to i after each pass (i++).
// That runs the loop body exactly 10 times, printing 1 through 10.
// =============================================
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// =============================================
// Task 2: User Input Loop
// prompt() always returns a string, so Number() converts the
// typed value into an actual number we can compare with <=.
// The for loop then counts from 1 up to whatever the user entered.
// =============================================
let userNumber = Number(prompt("Enter a number to count up to:"));

for (let i = 1; i <= userNumber; i++) {
  console.log("Count: " + i);
}

// =============================================
// Task 3: Triangle Pattern
// "line" starts empty and gains one extra "#" each time through the
// loop (line += "#"). Printing "line" inside the loop - rather than
// after it - is what shows a growing row on every iteration instead
// of just the finished triangle at the end.
// =============================================
let triangleHeight = 10; // change this number to make the triangle taller or shorter
let line = "";

for (let i = 1; i <= triangleHeight; i++) {
  line += "#";
  console.log(line);
}