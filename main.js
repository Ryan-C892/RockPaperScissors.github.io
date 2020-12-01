// Step 1 Success! //
// Establish rock paper scissors //
// Create a function that randomly returns rock paper or scissors //

const myArray = ['Rock','Paper','Scissors'];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// Step 2 Success! //
// Write a function that plays one round of rock paper scissors //
// Function needs parameters: names listed in the function definition //
// Make playerSelection equal rock //
// If playerSelection == "rock" and computerSelection = "paper" return message//
// Make the function case insensitive //

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() == "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore++
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") {
        console.log("You win! Rock beats Scissors!");
        userScore++
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() == "rock") {
        console.log("You win! Paper beats Rock!");
        userScore++
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper") {
        console.log("You win! Scissors beats Paper!");
        userScore++
    } else {
        console.log("Draw! Try again.");
    }
}

// Step 3 Success!//
// Write a function called game() //
// Put playRound() inside game() and repeat it five times //
// Find a way to keep the score and reports the winner and loser at the end //
// If userScore is greater than computerScore, player wins else computer wins //

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("Player score = " + userScore);
        console.log("Computer score = " + computerScore);
        if(i == 4 && userScore > computerScore) {
            console.log("Player Wins!");
            break;
        } else if (i == 4 && computerScore > userScore) {
            console.log("Computer Wins!");
            break;
        } else if (i == 4 && userScore === computerScore) {
            console.log("Tie!");
            break;
        }
    }
}
game();