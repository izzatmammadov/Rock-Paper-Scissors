const intro = document.getElementById("intro");
const game = document.getElementById("game");
const humanScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// intro page codes

function playGame() {
  intro.style.display = "none";
  game.style.display = "block";
}

function cancelGame() {
  alert("YOU ARE A LOSER!");
}

// game page codes

let youScore = 0;
let compScore = 0;

let hands = ["r", "p", "s"];

function randomHandSelector(arr) {
  let randomHand = Math.floor(Math.random() * arr.length);
  return arr[randomHand];
}

let compChoose = randomHandSelector(hands);

function startGame(e) {
  let yourChoose = e.key;

  if (!hands.includes(yourChoose)) {
    alert("PLEASE CHOOSE CORRET ITEM 'R' rock, 'P' paper, 'S' scissors");
    return;
  }
}

window.onkeydown = startGame;
console.log(yourChoose);

console.log(compChoose);

// function showHands (you,computer) {
//     humanScore.innerHTML = you;
//     computerScore.innerHTML = computer;

//     humanScore.src = `./images/${you}.png`;
//     computerScore.src = `./images/${computer}.png`;

// }
