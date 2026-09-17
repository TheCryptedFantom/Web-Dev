var firstName = "Trenton";
var favoriteGame = "Minecraft";
var otherFavoriteGame = "Ark: Survival Evolved";
var age = 17;
var gamesOwnedOnSteam = 61;
var gamesOwnedOnPlaystation = 51;
var totalGamesOwned = gamesOwnedOnSteam + gamesOwnedOnPlaystation;
var isGamer = true;

// String concatenations
console.log("My name is " + firstName);
console.log("My favorite games are " + favoriteGame + " and " + otherFavoriteGame);

// Math operations
console.log("Games owned on Steam after buying 5 more: " + (gamesOwnedOnSteam + 5));
console.log("Games owned on PlayStation after buying 5 more: " + (gamesOwnedOnPlaystation + 5));
console.log("My age in 5 years: " + (age + 5));

// Boolean
console.log("Am I a gamer? " + isGamer);

// Finds the HTML element with the id "content" and appends a paragraph to its existing content.
document.getElementById("content").innerHTML += "<p>I currently own " + gamesOwnedOnSteam + " games on Steam and " + gamesOwnedOnPlaystation + " games on PlayStation. I enjoy"
                + " playing a variety of games, from action-packed shooters to relaxing"
                + " simulation games. Each game offers a unique experience and allows me"
                + " to explore different worlds and stories.</p>";

// Finds the same "content" element and appends another paragraph showing the total number of games.
document.getElementById("content").innerHTML += "<p>That makes a total of " + totalGamesOwned + " games owned not counting Epic Games.</p>";
