const intro = document.getElementById("intro");
const game = document.getElementById("game");
const humanScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// intro page codes 

function startGame() {
    intro.style.display="none";
    game.style.display="block";
}

function cancelGame() {
    alert("YOU ARE A LOSER!")
}

// game page codes

let = ['rock', 'paper', 'scissors']