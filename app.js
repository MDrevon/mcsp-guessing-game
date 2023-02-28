//console.log("This is linked")

var secretNum = 42;
var attempts = 0;

let yourNum = guess()

function guess()
{

    let guessNum = prompt("Enter your guess:")
    if(guessNum < secretNum)
    {
        //alert("Higher");
        attempts = attempts + 1;
        guessAgain("Higher");
    }
    else if(guessNum > secretNum)
    {
        //alert("Lower");
        attempts = attempts + 1;
        guessAgain("Lower");

    }
    else
    {
        attempts = attempts + 1;
        alert("Correct! It took you " + attempts + " guesses");
    }
}

function guessAgain(status)
{
    let guessNum = prompt(status + " Guess again");

    if(guessNum < secretNum)
    {
        //alert("Higher");
        attempts = attempts + 1;
        guessAgain("Higher");
    }
    else if(guessNum > secretNum)
    {
        //alert("Lower");
        attempts = attempts + 1;
        guessAgain("Lower");

    }
    else
    {
        attempts = attempts + 1;
        alert("Correct! It took you " + attempts + " guesses");
    }
}