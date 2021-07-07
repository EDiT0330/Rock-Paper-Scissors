//let playerSelection;
//let computerSelection;
//let playerScore;
//let computerScore;

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
 
/*
function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    } else if(){
        return "tie";
    } else {
        return "you lose";
    }
}
const playerSelection = "Scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/