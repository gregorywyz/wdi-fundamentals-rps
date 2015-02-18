////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock") {    // when player chose rock
        switch (computerMove) {
            case "rock":
                winner = "tie";
                break;
            case "paper":
                winner = "computer";
                break;
            case "scissors":
                winner = "player";
                break;
        }  
    } else if (playerMove === "paper") {    // when player chose paper 
        switch (computerMove) {
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "tie";
                break;
            case "scissors":
                winner = "computer";
                break;
        }
    } else {    // when player chose scissors
        switch (computerMove) {
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "player";
                break;
            case "scissors":
                winner = "tie";
                break;
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! First to 5 wins!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        // assign variables that gets the moves
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
            if (getWinner(playerMove, computerMove) === "player") {    // when player wins
                console.log("You chose " + playerMove + " and beat the Computer's " + computerMove + "!");
                playerWins++;
                console.log("The score is: Player " + playerWins + " to " + "Computer " + computerWins + ".");
            } else if (getWinner(playerMove, computerMove) === "computer") {    // when computer wins
                console.log("You chose " + playerMove + " and lost to the Computer's " + computerMove + "!");
                computerWins++;
                console.log("The score is: Player " + playerWins + " to " + "Computer " + computerWins + ".");
            } else {    // when it's a tie
                console.log("You chose " + playerMove + " and tied the Computer's " + computerMove + "!");
                console.log("The score is still: Player " + playerWins + " to " + "Computer " + computerWins + ".");
            }
    }
    if (playerWins === 5) {
        console.log("Congrats! You won this match!");
    }
    if (computerWins === 5) {
        console.log("Bummer... The computer got the best of you on this match.");
    }
    return [playerWins, computerWins];
}

