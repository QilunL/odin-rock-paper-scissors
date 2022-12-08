const choices = ["ROCK", "PAPER", "SCISSORS"] ;

function getComputerChoice(){
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toUpperCase();
    let playerChoice = choices.indexOf(playerSelection);
    let computerChoice = choices.indexOf(computerSelection);
    
    if ((playerChoice - computerChoice == -1) || (playerChoice - computerChoice) == 2){
        return "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if((playerChoice - computerChoice == -2) || (playerChoice - computerChoice) == 1){
        return "You Win!" + playerSelection + " beats " + computerSelection;
    } else{
        return "It is a draw!";
    }

}


const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));