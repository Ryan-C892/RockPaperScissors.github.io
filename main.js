// Create a function that randomly returns rock paper or scissors //
// Create variables for user, computer, and user choices //

// Computer play //
function computerPlay() {
    const myArray = ['Rock','Paper','Scissors'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// Score counts //
let userScore = 0;
let computerScore = 0;
winner = document.getElementById("win");

// btn is a node list. it looks and acts like an array //
const buttons = document.querySelectorAll('button');

// End playRound after either player or computer gets 5 points //
let playingCount;
function checkPlayingCount() {
    // Display winner after either user or computer gets 5 points //
    if (playingCount >= 5 && computerScore >= 5) {
        alert("Computer wins!");
        winner.textContent = "Computer wins!";
    } else if (playingCount >= 5 && userScore >= 5) {
        alert("Player wins!");
        winner.textContent = "Player wins!";
    } else if (playingCount >= 5 && userScore >= 5 && computerScore >= 5) {
        alert("Draw! Try again.");
        winner.textContent = "Draw! Try again.";
    }
}

// Reset the Score to 0 //
function clearGame() {
    if (userScore === 5 || computerScore === 5) {
        window.location.reload();
    }
}

// use forEach() to iterate through each button and then add a 'click' listener //
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        computerSelection = computerPlay();
        playerSelection = e.target.id;
        let playerScore = document.getElementById("userScore");
        let botScore = document.getElementById("computerScore");
        const result = playRound(playerSelection, computerSelection);
        // Score increment //
        if (result == 1) {
            userScore++;
            playerScore.textContent = userScore;
        } else if (result == 0) {
            computerScore++
            botScore.textContent = computerScore;
        } else if (result == 2) {
            winner.textContent ="Draw! Try again.";
        }
        // Round count //
        if (playingCount == null) {
            playingCount = 0;
            playingCount += 1;
        } else {
            playingCount += 1;
        }
        checkPlayingCount()
    });
});

// Write a function that plays one round of rock paper scissors //
// Function needs parameters: names listed in the function definition //
// Make playerSelection equal rock //
// If playerSelection == "rock" and computerSelection = "paper" return message//
// Make the function case insensitive //
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let playerWin = 1;
    let computerWin = 0;
    let tie = 2;
    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock!");
        winner.textContent = "You lose! Paper beats Rock!";
        return computerWin;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        winner.textContent = "You lose! Scissors beats Paper!";
        return computerWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors!");
        winner.textContent = "You lose! Rock beats Scissors!";
        return computerWin;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors!");
        winner.textContent = "You win! Rock beats Scissors!";
        return playerWin;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock!");
        winner.textContent = "You win! Paper beats Rock!";
        return playerWin;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper!");
        winner.textContent = "You win! Scissors beats Paper!";
        return playerWin;
    } else if (playerSelection === computerSelection) {
        console.log("Draw! Try again.");
        winner.textContent ="Draw! Try again.";
        return tie;
    }
}
