//Rock, Paper, Scissors.
//Computer's choices
const choices = [
    'rock',
    'paper',
    'scissors'
];

const computerChoice = getComputerChoice();
const playerChoice = prompt('Rock, Paper, or Scissors?');
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

//Receiving computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

//Playing game. Receives input from user and computer and decides the winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() == computerChoice) {
        console.log("You tied");
    } else if (playerChoice.toLowerCase() == 'rock') {
    if (computerChoice == 'paper') {
        console.log('You lost!');
    } else {
        console.log('You won!');
    }
} else if (playerChoice.toLowerCase() == 'scissors') {
    if (computerChoice == 'rock') {
        console.log('You lost');
    } else {
        console.log('You won!');
    }
} else if (playerChoice.toLowerCase() == 'paper') {
    if (computerChoice == 'scissors') {
        console.log('You lost!');
    } else {
        console.log('You won!');
    }
}   
};

//Plays a 5 round game, keeps score and reports the winner and loser at the end
function playGame(playerChoice, computerChoice) {
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice);
        if (playerChoice.toLowerCase() == computerChoice) {
            ++gameRound;
        } else if (playerChoice.toLowerCase() == 'rock' && computerChoice == 'scissors') {
            ++gameRound;
            ++playerScore;
        } else {
            ++gameRound;
            ++computerScore;
        } if (playerChoice.toLowerCase() == 'paper' && computerChoice == 'rock') {
            ++gameRound;
            ++playerScore;
        } else {
            ++gameRound;
            ++computerScore;
        } if (playerChoice.toLowerCase() == 'scissors' && computerChoice == 'paper') {
            ++gameRound;
            ++playerScore;
        } else {
            ++gameRound;
            ++computerScore;
        }

        if (playerScore === 5) {
            alert('Congratulations. You have won.');
        } else {
            alert('Better luck next time.');
        }
    }
};

getComputerChoice();
playRound(playerChoice, computerChoice);

