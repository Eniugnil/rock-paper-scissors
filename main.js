function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 1) {
        return "rock";
    } else if (cpuChoice == 2) {
        return "paper";
    } else return "scissors";
}


function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins != 5) {
    console.log(playRound(prompt().toLowerCase(), getComputerChoice()));
 
    function playRound(playerSelection, computerSelection) {

        if (playerSelection === "rock" && computerSelection === "scissors") {
            playerWins++;
            return "Rock beats Scissors"}   

        else if (playerSelection === "rock" && computerSelection === "paper") {
            computerWins++;
            return "Rock loses to Paper"}

        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerWins++;
            return "Paper beats Rock"}

        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerWins++;
            return "Paper loses to Scissors"}

        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerWins++;
            return "Scissors beats Paper"}

        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerWins++;
            return "Scissors loses to Rock"}

        else if (playerSelection === computerSelection) {return "Tie"}
    }
}
if (playerWins == 5) {
    return "You Win";
}
else return "Lose";
}