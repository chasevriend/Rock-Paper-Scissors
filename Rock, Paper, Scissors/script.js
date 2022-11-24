// var choices = [
//     'rock',
//     'paper',
//     'scissors'
// ]

// let playerSelection = prompt('Rock, Paper or Scissors?');

// //Function that will randomly pick between rock, paper, and scissors
// function getComputerChoice() {
//     console.log(choices[Math.floor(Math.random()*choices.length)]);
// }
// let computerSelection = getComputerChoice();

// //Function that will play a single round. It will take 2 paramaters and then return
// // a string that will return the winner
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection.toLowerCase() === computerSelection) {
//     console.log("You tied")
//     } else if (playerSelection.toLowerCase == 'rock') {
//         if (computerSelection == 'paper') {
//             console.log('You lost!');
//         } else {
//             console.log('You won!')
//         }
//     } else if (playerSelection.toLowerCase() == 'scissors') {
//         if (computerSelection == 'rock') {
//             console.log('You lost');
//         } else {
//             console.log('You won!')
//         }
//     } else if (playerSelection.toLowerCase() == 'paper') {
//         if (computerSelection == 'scissors') {
//             console.log('You lost!');
//         } else {
//             console.log('You won!');
//         }
//     }
// }

// console.log("I choose " + playerSelection + " !");
// console.log(playRound(playerSelection, computerSelection));

//Cleaner code Attempt 2
//Computer's choices
const choices = [
    'rock',
    'paper',
    'scissors'
]

const computerChoice = getComputerChoice();
const playerChoice = "rock";

//Function receiving computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//Function playing game. Receives input from user and computer and decides the winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == computerChoice) {
        console.log("You tied");
    } else if (playerChoice.toLowerCase() == 'rock') {
    if (computerChoice == 'paper') {
        console.log('You lost!');
    } else {
        console.log('You won!')
    }
} else if (playerChoice.toLowerCase() == 'scissors') {
    if (computerChoice == 'rock') {
        console.log('You lost');
    } else {
        console.log('You won!')
    }
} else if (playerChoice.toLowerCase() == 'paper') {
    if (computerChoice == 'scissors') {
        console.log('You lost!');
    } else {
        console.log('You won!');
    }
}   
}

//Function playing the game and keeping score
// function game() {
//     for (let i = 0; i < 5; i++) {
//         getComputerChoice();
//         playRound();
//     }
// }


getComputerChoice();
playRound(playerChoice, computerChoice);
