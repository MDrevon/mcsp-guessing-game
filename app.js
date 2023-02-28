//console.log("This is linked")

var secretNum = 42;

let yourNum = guess()

function guess()
{
    let guessNum = prompt("Enter your guess:")
    if(guessNum < secretNum)
    {
        alert("Higher");
    }
    else if(guessNum > secretNum)
    {
        alert("Lower");
    }
    else
    {
        alert("Correct!")
    }
}