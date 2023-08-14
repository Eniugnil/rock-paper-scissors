function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 1) {
        return "rock";
    } else if (cpuChoice == 2) {
        return "paper";
    } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {return "Rock beats Scissors"}   
    else if (playerSelection === "rock" && computerSelection === "paper") {return "Rock loses to Paper"}
    else if (playerSelection === "paper" && computerSelection === "rock") {return "Paper beats Rock"}
    else if (playerSelection === "paper" && computerSelection === "scissors") {return "Paper loses to Scissors"}
    else if (playerSelection === "scissors" && computerSelection === "paper") {return "Scissors beats Paper"}
    else if (playerSelection === "scissors" && computerSelection === "rock") {return "Scissors loses to Rock"}
    else if (playerSelection === computerSelection) {return "Tie"}
}
