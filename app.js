//console.log("This is linked")

var secretNum = 42;
var tries = 0;
var guesses = [];

guess();

function guess()
{

    let guessNum = prompt("Enter your guess:")
    if(guessNum < secretNum)
    {
        //alert("Higher");
        //attempts = attempts + 1;
        attempts();
        guesses.push(guessNum);
        guessAgain("Higher");
    }
    else if(guessNum > secretNum)
    {
        //alert("Lower");
        //attempts = attempts + 1;
        attempts();
        guesses.push(guessNum);
        guessAgain("Lower");

    }
    else
    {
        //attempts = attempts + 1;
        attempts();
        //guesses.push(guessNum);
        alert("Correct! It took you " + tries + " guesses." );
    }
}

function attempts()
{
    tries += 1;
}

function guessAgain(status)
{
    let guessNum = prompt(status + " Guess again");

    if(guessNum < secretNum)
    {
        //alert("Higher");
        //attempts = attempts + 1;
        attempts();
        guesses.push(guessNum);
        guessAgain("Higher");
    }
    else if(guessNum > secretNum)
    {
        //alert("Lower");
        //attempts = attempts + 1;
        attempts();
        guesses.push(guessNum);
        guessAgain("Lower");

    }
    else
    {
        //attempts = attempts + 1;
        attempts();
        //guesses.push(guessNum);
        alert("Correct! It took you " + tries + " guesses. You're previous guesses were " + guesses + "!" );
    }
}