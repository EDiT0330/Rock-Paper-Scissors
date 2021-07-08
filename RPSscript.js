//let playerSelection;
//let computerSelection;
let playerScore;
let computerScore;

//Function lets the computer make a choice between rock, paper or scissors

function computerPlay(){
    let pickItem = Math.floor(Math.random()*3);

    switch(pickItem){
        case 0: 
         return 'Rock';
        case 1:
         return 'Paper';
        case 2:
        return 'Scissors';
    } 
}

//Function plays one round of RPS with the players input as well as the random selection created by the computer

function playRound(playerSelection, computerSelection){

    console.log(playerSelection);
    console.log(computerSelection);

    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection == computerSelection.toLowerCase()){
        return "Tie";
    } else if(playerSelection == "Rock".toLowerCase()){
        if(computerSelection == "Scissors"){
            return "You win, Rock beats Scissors";
        } else if(computerSelection == "Paper"){
            return "You lose, paper beats rock"
        }
    } else if(playerSelection == "Paper".toLowerCase()){
        if(computerSelection == "Rock"){
            return "You win, Paper beats Rock";
        } else if(computerSelection == "Scissors"){
            return "You lose, Scissors beats Paper";
        }      
    } else if(playerSelection == "Scissors".toLowerCase()){
        if(computerSelection == "Paper"){
            return "You win, Scissors beats Paper";
        } else if(computerSelection == "Rock"){
            return "You lose, Rock beats Scissors";
        }
    }
}

function game(){
    
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));