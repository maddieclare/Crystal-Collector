let score = 0;
let playerSelection;
let crystalNumber = [];
let wins = 0;
let losses = 0;

//  There will be six crystals displayed as buttons on the page.

//  The player will be shown a random number at the start of the game (between 19 and 120)

//  function to choose a random number between 19 and 120
function getRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
}

//  When the player clicks on a crystal, it will add a specific amount of points to the player's total score (random value between 1 and 12).

//  function to generate a random number and store it in crystalNumber array
function randomCrystalNumber(min, max) {
  for (let i = 0; i < 7; i++) {
    crystalNumber.push(Math.floor(Math.random() * (max - min + 1) + min));
    console.log(crystalNumber);
  }
}

//  in HTML, each crystal image is assigned a number from the crystalNumber array

//  Your game will hide this amount until the player clicks a crystal.

//  When they do click one, update the player's score counter.
function updateScore() {
  score = score + playerSelection;
  console.log(score);
}

//     The player wins if their total score matches the random number from the beginning of the game.

function playerWins() {
  //blah
}

//     The player loses if their score goes above the random number.

function playerLoses() {
  //blah
}

//     The game restarts whenever the player wins or loses.
//     When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values.
//     Of course, the user's score (and score counter) will reset to zero.

function resetGame() {
  //blah
}

//     The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
