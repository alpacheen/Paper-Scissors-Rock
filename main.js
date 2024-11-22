let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["paper", "scissors", "rock"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}
 function getHumanChoice(){
    let userChoice = prompt("Please choose Paper, Scissors or Rock").toLowerCase();
    while (!["paper", "scissors", "rock"].includes(userChoice)){
        userChoice = prompt("Invalid choice!")
    }
    return userChoice;
}  

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === "paper" && computerChoice === "rock") ||
(humanChoice === "scissors" && computerChoice === "paper") ||
(humanChoice === "rock" && computerChoice === "scissors")
) {
    humanScore++;
    return `${humanChoice} beats ${computerChoice} You Win!`
} else {
    computerScore++;
    return `${computerChoice} beats ${humanChoice} Computer Wins!`
}
}
