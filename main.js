const intro = document.getElementById("intro");
const game = document.getElementById("game");

const humanScore = document.getElementById("humanScore");
const humanHand = document.getElementById("humanHand");

const computerScore = document.getElementById("computerScore");
const computerHand = document.getElementById("computerHand");

// intro page codes

let myScore = 0;
let compScore = 0;

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
  } else if (
    (computer === "r" && user === "s") ||
    (computer === "p" && user === "r") ||
    (computer === "s" && user === "p")
  ) {
    compScore++;
  }

  humanScore.textContent = myScore;
  computerScore.textContent = compScore;
}
