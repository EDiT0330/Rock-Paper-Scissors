//initializing scores
let playerScore = 0;
let computerScore = 0; 
let round = 0;
let playerSelection;
let computerSelection;

// types of moves that can be used
const ROCK = "rock"; 
const PAPER = "paper"; 
const SCISSORS = "scissors";

//Using computerplay() as an array
const hands = [ROCK, PAPER, SCISSORS];
function computerPlay(){
    let chooseHands = Math.floor(Math.random()*3);
    return hands[chooseHands];
}

//Function plays one round of RPS with the players input as well as the random selection created by the computer
function playRound(){

    console.log("Your Move: " + playerSelection);
    console.log("Computer's Move: " + computerSelection);

    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === computerSelection){
        return "Tie";
    } else if(playerSelection === ROCK){
        if(computerSelection === SCISSORS){
            playerScore++;
            return "You win, Rock beats Scissors";
        } else if(computerSelection === PAPER){
            computerScore++;
            return "You lose, paper beats rock"; 
        }
    } else if(playerSelection === PAPER){
        if(computerSelection === ROCK){
            playerScore++;
            return "You win, Paper beats Rock";
        } else if(computerSelection === SCISSORS){
            computerScore++;
            return "You lose, Scissors beats Paper";
        }      
    } else if(playerSelection === SCISSORS){
        if(computerSelection === PAPER){
            playerScore++;
            return "You win, Scissors beats Paper";
        } else if(computerSelection === ROCK){
            computerScore++;
            return "You lose, Rock beats Scissors";
        }
    }
    
}

//Function plays the game
function game(){
    
    //Plays round 5 times
    
    //playRound();

    //once 5 rounds have been reached show result
    
     if(playerScore || computerScore == 5){
        if(playerScore == computerScore){
            return "Nothing Happens";
        } else if(playerScore>computerScore){
            return "You Win the game";
        } else{
            return "Computer Wins, take the L";
        }
    }
}


//event listeners
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissors');


//const container = document.querySelectorAll('#container');
//event listener function
rockButton.addEventListener('click', function(){
    playerSelection = ROCK;
    computerSelection = computerPlay();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
    updateScore();
});

paperButton.addEventListener('click', function(){
    playerSelection = PAPER;
    computerSelection = computerPlay();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
    updateScore();
    
});

scissorButton.addEventListener('click', function(){
    playerSelection = SCISSORS;
    computerSelection = computerPlay();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
    updateScore();
});

function updateScore(){
    const scorePlay = document.getElementById('playerScore');
    const scoreComp = document.querySelector('#scoreC');  
    
    scorePlay.textContent = '${scoreP}';
    scoreComp.textContent = '${scoreC}';
}



//play the game
//console.log(game());

//show score
//console.log("Your score: " + playerScore);
//console.log("Computer's score: " + computerScore);