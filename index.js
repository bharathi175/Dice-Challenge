// Player 1// Function to roll a dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // 1 to 6
}

// Player 1
var random1 = rollDice();
var randomdice1 = "dice" + random1 + ".png";
document.querySelector(".img1").src = randomdice1;

// Player 2
var random2 = rollDice();
var randomdice2 = "dice" + random2 + ".png";
document.querySelector(".img2").src = randomdice2;

// Determine winner
var heading = document.querySelector("h1");
if (random1 > random2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (random2 > random1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}


