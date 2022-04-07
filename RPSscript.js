//initializing scores
let playerScore = 0;
let computerScore = 0; 
let round = 0;
let roundWinner = '';


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
    
    if(playerSelection === computerSelection){
        roundWinner = "tie";
    } else if(playerSelection === ROCK){
        if(computerSelection === SCISSORS){
            playerScore++;
            roundWinner = "player";
        } else if(computerSelection === PAPER){
            computerScore++;
            roundWinner = "computer"; 
        }
    } else if(playerSelection === PAPER){
        if(computerSelection === ROCK){
            playerScore++;
            roundWinner = "player";
        } else if(computerSelection === SCISSORS){
            computerScore++;
            roundWinner = "computer"; 
        }      
    } else if(playerSelection === SCISSORS){
        if(computerSelection === PAPER){
            playerScore++;
            roundWinner = "player";
        } else if(computerSelection === ROCK){
            computerScore++;
            roundWinner = "computer"; 
        }
    }
}

/*
//Function plays the game
function game(){
    
    //Plays round 5 times
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
*/

//event listeners
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissors');

//event listener function
rockButton.addEventListener('click', function(){
    playerSelection = ROCK;
    computerSelection = computerPlay();
    playRound();
    updateScore();
    gameResult();
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundWinner);
});

paperButton.addEventListener('click', function(){
    playerSelection = PAPER;
    computerSelection = computerPlay();
    playRound();
    updateScore();
    gameResult();
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundWinner);
});

scissorButton.addEventListener('click', function(){
    playerSelection = SCISSORS;
    computerSelection = computerPlay();
    playRound();
    updateScore();
    gameResult();
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundWinner);
});

function updateScore(){
    const scorePlay = document.getElementById('scoreP');
    const scoreComp = document.getElementById('scoreC');  
    
    scorePlay.textContent = `${playerScore}`;
    scoreComp.textContent = `${computerScore}`;
}

function gameResult(){   
    const gameResult = document.getElementById('gameResult');

    if(roundWinner == 'tie'){
        gameResult.textContent = `tie`;
    }else if(roundWinner == 'player'){
        gameResult.textContent = `win`;
    }else if(roundWinner == 'computer'){
        gameResult.textContent = `loss`;
    }
}

//play the game
console.log(game());
