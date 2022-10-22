let playerSelection;
let computerSelection;
let score;
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const scoreOfTheGame = document.querySelector("#winner");
const buttonClick = document.querySelectorAll(".buttonAction");

buttonClick.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerPlay();
    playerScore.textContent = `Player move: ${playerSelection}`;
    computerScore.textContent = `Computer move: ${computerSelection}`;
    scoreOfTheGame.textContent = playRound(playerSelection, computerSelection);
}));

function computerPlay(){
    const choice = ["rock", "paper", "scissors"];
    computerSelection = choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection){
        if((playerSelection === "rock") && (computerSelection === "paper")){
            return "Paper beats rock!!! You lost";
        }else if(playerSelection === "rock" && computerSelection === "scissors"){
            return "Rock beats scissors!!! You won";
        }else if(playerSelection === "rock" && computerSelection === "rock"){
            return "Same move";
        }else if(playerSelection === "paper" && computerSelection === "rock"){
            return "Paper beats rock!!! You won";
        }else if(playerSelection === "paper" && computerSelection === "scissors"){
            return "Scissors beats paper!!! You lost";
        }else if(playerSelection === "paper" && computerSelection === "paper"){
            return "Same move";
        }else if(playerSelection === "scissors" && computerSelection === "rock"){
            return "Rock beats scissors!!! You lost";
        }else if(playerSelection === "scissors" && computerSelection === "paper"){
            return "Scissors beats paper!!! You won";
        }else if(playerSelection === "scissors" && computerSelection === "scissors"){
            return "Same move";
        } 
}
