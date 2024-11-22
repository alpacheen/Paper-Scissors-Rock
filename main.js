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
        userChoice = prompt("Invalid choice! Please choose Paper, Scissors or Rock");
    }
    return userChoice;
}  

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === "paper" && computerChoice === "rock") ||
(humanChoice === "scissors" && computerChoice === "paper") ||
(humanChoice === "rock" && computerChoice === "scissors")
) {
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice} You Win!`);
} else {
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice} Computer Wins!`);
}
}
function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <=5; round++){
        console.log(`\nRound ${round}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("You win the game");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else {
        console.log("It's a tie!")
    }
}
playGame();