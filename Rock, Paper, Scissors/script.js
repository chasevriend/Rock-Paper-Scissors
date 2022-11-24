var choices = [
    'rock',
    'paper',
    'scissors'
]

let playerSelection = prompt('Rock, Paper or Scissors?');

//Function that will randomly pick between rock, paper, and scissors
function getComputerChoice() {
    console.log(choices[Math.floor(Math.random()*choices.length)]);
}
let computerSelection = getComputerChoice();

//Function that will play a single round. It will take 2 paramaters and then return
// a string that will return the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
    console.log("You tied")
    } else if (playerSelection.toLowerCase == 'rock') {
        if (computerSelection == 'paper') {
            console.log('You lost!');
        } else {
            console.log('You won!')
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lost');
        } else {
            console.log('You won!')
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('You lost!');
        } else {
            console.log('You won!');
        }
    }
}

playRound(playerSelection, computerSelection);
console.log("I choose " + playerSelection + " !");
console.log(playRound(playerSelection, computerSelection));

