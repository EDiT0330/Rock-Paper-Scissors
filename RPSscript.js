let playerScore = 0;
let computerScore = 0; 
let round = 0;

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

    console.log("Your Move: " + playerSelection);
    console.log("Computer's Move: " + computerSelection);

    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection == computerSelection.toLowerCase()){
        return "Tie";
    } else if(playerSelection == "rock"){
        if(computerSelection == "Scissors"){
            playerScore++;
            return "You win, Rock beats Scissors";
        } else if(computerSelection == "Paper"){
            computerScore++;
            return "You lose, paper beats rock"; 
        }
    } else if(playerSelection == "paper"){
        if(computerSelection == "Rock"){
            playerScore++;
            return "You win, Paper beats Rock";
        } else if(computerSelection == "Scissors"){
            computerScore++;
            return "You lose, Scissors beats Paper";
        }      
    } else if(playerSelection == "scissors"){
        if(computerSelection == "Paper"){
            playerScore++;
            return "You win, Scissors beats Paper";
        } else if(computerSelection == "Rock"){
            computerScore++;
            return "You lose, Rock beats Scissors";
        }
    }
}

//Function plays the game
function game(){
    
    //Plays round 5 times
    while(round<5) {
        const playerSelection = prompt("Your Move");
        const computerSelection = computerPlay();

        round++;
        console.log(playRound(playerSelection, computerSelection));
    }
    
    //once 5 rounds have been reached show result
    if(round == 5){
        if(playerScore == computerScore){
            return "Nothing Happens";
        } else if(playerScore>computerScore){
            return "You Win the game";
        } else{
            return "Computer Wins, take the L";
        }

    }
}

//play the game
console.log(game());
//show score
console.log("Your score: " + playerScore);
console.log("Computer's score: " + computerScore);