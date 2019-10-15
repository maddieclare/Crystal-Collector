//  Global variables.
let crystalNumbers;
let target;
let currentScore;
let wins = 0;
let losses = 0;

//  Generates a random number between two integers.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//  Generates a random value for each crystal (between 1 and 12).
function initialize() {
  let min = 1;
  let max = 12;

  crystalNumbers = {
    red: getRandomNumber(min, max),
    orange: getRandomNumber(min, max),
    yellow: getRandomNumber(min, max),
    green: getRandomNumber(min, max),
    aqua: getRandomNumber(min, max),
    blue: getRandomNumber(min, max),
    purple: getRandomNumber(min, max)
  };

//  Assigns number from getRandomNumber function to target variable.
  target = getRandomNumber(19, 120);
  currentScore = 0;
}

// Returns integer values stored in crystalNumbers attributes.
function getCrystalScore(color) {
  return crystalNumbers[color];
}

//  Adds crystal value to total score.
function crystalClick(whichCrystal) {
  currentScore += getCrystalScore(whichCrystal);
}

//  Player win alert.
function playerWins() {
  alert("Winner!");
  wins++;
}

//  Player lose alert.
function playerLoses() {
  alert("Loser :(");
  losses++;
}

