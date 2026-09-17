var firstName = "Trenton";
var favoriteGame = "Minecraft";
var otherFavoriteGame = "Ark: Survival Evolved";
var age = 17;
var gamesOwnedonSteam = 61;
var gamesOwnedonPlaystation = 51;
var totalGamesOwned = gamesOwnedonSteam + gamesOwnedonPlaystation;
var isGamer = true;

// String concatenations
console.log("My name is " + firstName);
console.log("My favorite games are " + favoriteGame + " and " + otherFavoriteGame);

// Math operations
console.log("Games owned on Steam after buying 5 more: " + (gamesOwnedonSteam + 5));
console.log("Games owned on PlayStation after buying 5 more: " + (gamesOwnedonPlaystation + 5));
console.log("My age in 5 years: " + (age + 5));

// Boolean
console.log("Am I a gamer? " + isGamer);

document.getElementById("content").innerHTML += "<p>I currently own " + gamesOwnedonSteam + " games on Steam and " + gamesOwnedonPlaystation + " games on PlayStation. I enjoy"
                + " playing a variety of games, from action-packed shooters to relaxing"
                + " simulation games. Each game offers a unique experience and allows me"
                + " to explore different worlds and stories.</p>";

document.getElementById("content").innerHTML += "<p>That makes a total of " + totalGamesOwned + " games owned not counting Epic Games.</p>";
