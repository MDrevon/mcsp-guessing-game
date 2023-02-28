var secretNum;
var tries;
var guesses;
var guesser;

newGame();

function newGame() {
  secretNum = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  guesses = [];
  guesser = getName();

  guess();
}

function getName() {
  return prompt("Enter your name:");
}

function guess() {
  let guessNum = prompt("Enter your guess:");

  attempts();
  guesses.push(guessNum);

  if (guessNum < secretNum) {
    guessAgain("Higher", guesser);
  } else if (guessNum > secretNum) {
    guessAgain("Lower", guesser);
  } else {
    alert("That's Correct " + guesser + "! It took you " + tries + " guesses.");
    playAgain();
  }
}

function attempts() {
  tries += 1;
}

function guessAgain(status, name) {
  let guessNum = prompt("Sorry, " + name + " Guess " + status);

  attempts();
  guesses.push(guessNum);

  if (guessNum < secretNum) {
    guessAgain("Higher", guesser);
  } else if (guessNum > secretNum) {
    guessAgain("Lower", guesser);
  } else {
    alert(
      "That's Correct " +
        guesser +
        "! It took you " +
        tries +
        " guesses. You're previous guesses were " +
        guesses +
        "!"
    );
    playAgain();
  }

  function playAgain() {
    if (prompt("Would you like to play again") === "Yes") {
      newGame();
    }
  }
}
