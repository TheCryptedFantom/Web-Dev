// 1. Grade calculator
let score = Number(prompt("Enter your score (0–100):"));

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else  if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 2. Age check
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 3. Custom check — movie rating eligibility
let movieRating = prompt("Enter the movie rating (G, PG, PG-13, R):").toUpperCase();

if (movieRating === "G") {
  console.log("G: Suitable for all ages.");
} else if (movieRating === "PG") {
  console.log("PG: Some material may not be suitable for children. Parental guidance suggested.");
} else if (movieRating === "PG-13") {
  if (age < 13) {
    console.log("PG-13: Not recommended without a parent, you're under 13.");
  } else {
    console.log("PG-13: You're cleared to watch.");
  }
} else if (movieRating === "R") {
  if (age < 17) {
    console.log("R: You must be 17+ (or with a guardian) to watch this movie.");
  } else {
    console.log("R: You're cleared to watch.");
  }
} else {
  console.log("That's not a recognized rating. Please enter G, PG, PG-13, or R.");
}