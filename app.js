var secretNum;
var tries;
var guesses;
var guesser;
var scores = {};

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
  let guessNum = parseInt(prompt("Enter your guess:"));

  attempts();
  guesses.push(guessNum);

  if (guessNum < secretNum) {
    guessAgain("Higher", guesser);
  } else if (guessNum > secretNum) {
    guessAgain("Lower", guesser);
  } else {
    alert("That's Correct " + guesser + "! It took you " + tries + " guesses.");
    checkScore(scores, guesser)
    playAgain();
  }
}

function attempts() {
  tries += 1;
}

function guessAgain(status, name) {
  let guessNum = parseInt(prompt("Sorry, " + name + " Guess " + status));

  attempts();
  guesses.push(guessNum);

  if (guessNum < secretNum) {
    guessAgain("Higher", guesser);
  } else if (guessNum > secretNum) {
    guessAgain("Lower", guesser);
  } else {
    checkScore(scores, guesser);
    playAgain();
  }

  function playAgain() {
    if (prompt("Would you like to play again") === "Yes") {
      newGame();
    }
  }

  function checkScore(obj, player) {
    if (obj.hasOwnProperty(player)) {
      if (obj[player] > tries) {
        alert(
          "That's Correct " +
            name +
            "! And you beat your previous attempt by " +
            (obj[player] - tries) +
            " fewer guesses!"
        );
        obj[player] = tries;
      } else {
        alert(
          "That's Correct " +
            name +
            "! you did better in your last game by " +
            (tries - obj[player]) +
            " more guesses!"
        );
      }
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
      obj[player] = tries;
    }
  }
}
