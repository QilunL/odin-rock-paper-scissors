const choices = ["ROCK", "PAPER", "SCISSORS"] ;

function getComputerChoice(){
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

let playerWins = 0;
let computerWins = 0;
let draws = 0;

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toUpperCase();
    let playerChoice = choices.indexOf(playerSelection);
    let computerChoice = choices.indexOf(computerSelection);
    
    if ((playerChoice - computerChoice == -1) || (playerChoice - computerChoice) == 2){
        alert (`You Lose this round! ${computerSelection} beats ${playerSelection}`);
        computerWins += 1;
        return computerWins;
    } else if((playerChoice - computerChoice == -2) || (playerChoice - computerChoice) == 1){
        alert (`You Win this round! ${playerSelection} beats ${computerSelection}`);
        playerWins += 1;
        return playerWins;
    } else{
        alert ("This round is a draw!");
        draws += 1;
        return draws;
    }

}

function game(){
    let j = Number(prompt("How many rounds?"))
    for (let i = 0; i < j; i++){
        let playerSelection;
            do {
                playerSelection = prompt(`Game ${i + 1}: Rock, Paper or Scissors?`);
            }
            while(choices.includes(playerSelection.toUpperCase()) == false);
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (playerWins > computerWins){
        alert (`You win!, You ${playerWins}:${computerWins} computer`);
    } else if(computerWins > playerWins){
        alert (`You lose!, You ${playerWins}:${computerWins} computer`);
    } else{
        alert (`Is is a draw!, you ${playerWins}:${computerWins} computer`);
    }
}

game();