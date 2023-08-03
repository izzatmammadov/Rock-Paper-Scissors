const intro = document.getElementById("intro");
const game = document.getElementById("game");

const humanScore = document.getElementById("humanScore");
const humanHand = document.getElementById("humanHand");

const computerScore = document.getElementById("computerScore");
const computerHand = document.getElementById("computerHand");

const playerWin = document.getElementById("playerWin");
const playerLose = document.getElementById("playerLose");
const playerDraw = document.getElementById("playerDraw");

const winResult = document.getElementById("winResult");
const loseResult = document.getElementById("loseResult");

// intro page codes

let myScore = 0;
let compScore = 0;
let winScore = 0;
let loseScore = 0;

function playGame() {
  intro.style.display = "none";
  game.style.display = "block";
}

function cancelGame() {
  alert("YOU ARE A LOSER!");
}

// game page codes

function randomHandSelector() {
  let hands = ["r", "p", "s"];
  let randomHand = Math.floor(Math.random() * 3);
  computerHand.setAttribute("src", `./images/${hands[randomHand]}.png`);
  return hands[randomHand];
}

function rockBtn() {
  humanHand.setAttribute("src", `./images/r.png`);
  let compCheck = randomHandSelector();
  result("r", compCheck);
}

function paperBtn() {
  humanHand.setAttribute("src", `./images/p.png`);
  let compCheck = randomHandSelector();
  result("p", compCheck);
}

function scissorsBtn() {
  humanHand.setAttribute("src", `./images/s.png`);
  let compCheck = randomHandSelector();
  result("s", compCheck);
}

function result(user, computer) {
  if (
    (user === "r" && computer === "s") ||
    (user === "p" && computer === "r") ||
    (user === "s" && computer === "p")
  ) {
    myScore++;
    if (myScore === 3) {
      playerWin.style.display = "block";
      winResult.innerHTML = winScore += 1;
      document.querySelector(".btn-group").style.display = "none";
      setTimeout(() => {
        playerWin.style.display = "none";
        humanScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        myScore = 0;
        compScore = 0;
        humanHand.setAttribute("src", `./images/r.png`);
        computerHand.setAttribute("src", `./images/r.png`);
        document.querySelector(".btn-group").style.display = "flex";
      }, 1500);
    }
  } else if (
    (computer === "r" && user === "s") ||
    (computer === "p" && user === "r") ||
    (computer === "s" && user === "p")
  ) {
    compScore++;
    if (compScore === 3) {
      playerLose.style.display = "block";
      document.querySelector(".btn-group").style.display = "none";
      loseResult.innerHTML = loseScore += 1;
      setTimeout(() => {
        playerLose.style.display = "none";
        humanScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        myScore = 0;
        compScore = 0;
        computerHand.setAttribute("src", `./images/r.png`);
        humanHand.setAttribute("src", `./images/r.png`);
        document.querySelector(".btn-group").style.display = "flex";
      }, 1500);
    }
  }

  humanScore.textContent = myScore;
  computerScore.textContent = compScore;
}
