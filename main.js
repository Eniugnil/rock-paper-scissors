function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 1) {
        return 'rock';
    } else if (cpuChoice == 2) {
        return 'paper';
    } else return 'scissors';
}

//rock
let rock = document.getElementById('rock');
rock.addEventListener('click', choseRock);

function choseRock(e) {
    playRound('rock', getComputerChoice());
}

//paper
let paper = document.getElementById('paper');
paper.addEventListener('click', chosePaper);

function chosePaper(e) {
    playRound('paper', getComputerChoice());
}

//scissors
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', choseScissors);

function choseScissors(e) {
    playRound('scissors', getComputerChoice());
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        player.textContent = `Player Score: ${playerWins++}`;
        roundResults.textContent =  'Rock beats Scissors'}   

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computer.textContent = `Computer Score: ${computerWins++}`;
        roundResults.textContent =  'Rock loses to Paper'}

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        player.textContent = `Player Score: ${playerWins++}`;
        roundResults.textContent =  'Paper beats Rock'}

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computer.textContent = `Computer Score: ${computerWins++}`;
        roundResults.textContent =  'Paper loses to Scissors'}

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        player.textContent = `Player Score: ${playerWins++}`;
        roundResults.textContent =  'Scissors beats Paper'}

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computer.textContent = `Computer Score: ${computerWins++}`;
        roundResults.textContent =  'Scissors loses to Rock'}

    else if (playerSelection === computerSelection) {roundResults.textContent =  'Tie'}

    if (playerWins == 5) {
        gameWinner.textContent = 'Previous Round Winner: You won';
        playerWins = 0;
        computerWins = 0;

    } else if (computerWins == 5) {
        gameWinner.textContent = 'Previous Round Winner: You lost';
        playerWins = 0;
        computerWins = 0;
    }

}


let playerWins = 0;
let computerWins = 0;

const container = document.querySelector('body')
const roundResults = document.createElement('div');
container.appendChild(roundResults);

let player = document.createElement('div');
player.textContent = `Player Score: ${playerWins}`;
container.appendChild(player);

let computer = document.createElement('div');
computer.textContent = `Computer Score: ${computerWins}`;
container.appendChild(computer);

const gameWinner = document.createElement('div');
gameWinner.textContent = 'Previous Round Winner: Neither';
container.appendChild(gameWinner);