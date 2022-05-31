const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  displayResult(playRound(rockButton.id, computerPlay()));
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
  displayResult(playRound(paperButton.id, computerPlay()));
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
  displayResult(playRound(scissorsButton.id, computerPlay()));
});

function displayResult(result) {
  const playerScore = document.getElementById("playerScore");

  const computerScore = document.getElementById("computerScore");

  let pScore = playerScore.innerHTML;
  let cScore = computerScore.innerHTML;

  // if (pScore == 5) {
  //   p.textContent = "Player wins";

  //   prompt("Do you want to play again?");
  // }

  // if (cScore == 5) {
  //   p.textContent = "Computer wins";

  //   prompt();
  // }

  //display result
  const resultDiv = document.querySelector(".result");
  const p = document.querySelector(".result-p");
  p.textContent = result[0];

  if (result[1] === 2) {
    pScore++;
    document.getElementById("playerScore").innerHTML = pScore;
  }

  if (result[1] === 0) {
    cScore++;
    document.getElementById("computerScore").innerHTML = cScore;
  }

  if (pScore == 5) {
    p.textContent = p.textContent + ". THE PLAYER WINS!!!!";

    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
  }

  if (cScore == 5) {
    p.textContent = p.textContent + ". Computer wins!!!!";

    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
  }
}

function computerPlay() {
  let randomNo = Math.floor(Math.random() * 3);

  if (randomNo === 0) {
    return "Rock";
  }

  if (randomNo === 1) {
    return "Paper";
  }

  if (randomNo === 2) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  //   ROCK
  if (playerChoice === "rock" && computerChoice === "rock") {
    return ["It's a draw! Rock draws with Rock", 1];
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return ["You win! Rock beats Scissors", 2];
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    return ["You lose! Paper beats Rock", 0];
  }

  //   PAPER
  if (playerChoice === "paper" && computerChoice === "paper") {
    return ["It's a draw! Paper draws with Paper", 1];
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    return ["You win! Paper beats Rock", 2];
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    return ["You lose! Scissors beats Paper", 0];
  }

  //   SCISSORS
  if (playerChoice === "scissors" && computerChoice === "scissors") {
    return ["It's a draw! Scissors draws with Scissors", 1];
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    return ["You win! Scissors beatsPaper", 2];
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    return ["You lose! Rock beats Scissors", 0];
  }
}

function playRoundUpdated(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  //   ROCK
  if (playerChoice === "rock" && computerChoice === "rock") {
    console.log("It's a draw! Rock draws with Rock");
    return 1;
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    return 2;
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    return 0;
  }

  //   PAPER
  if (playerChoice === "paper" && computerChoice === "paper") {
    console.log("It's a draw! Paper draws with Paper");

    return 1;
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    return 2;
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    return 0;
  }

  //   SCISSORS
  if (playerChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a draw! Scissors draws with Scissors");
    return 1;
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beatsPaper");
    return 2;
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    return 0;
  }
}

function getResult() {
  let result = returnFive();
  console.log(result);
}

// function returnFive() {
//   return "five";
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt();
//     const computerSelection = computerPlay();

//     console.log(
//       "You draw " +
//         playerSelection +
//         " and the computer draws " +
//         computerSelection
//     );

//     let result = playRoundUpdated(playerSelection, computerSelection);

//     // player wins
//     if (result === 2) {
//       playerScore = playerScore + 1;
//     }

//     if (result === 0) {
//       computerScore = computerScore + 1;
//     }
//   }

//   if (playerScore > computerScore) {
//     return "You win!";
//   }

//   if (computerScore > playerScore) {
//     return "You lose!";
//   }
//   if (playerScore === computerScore) {
//     return "It's a draw!";
//   }
// }
