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
    return "It's a draw! Rock draws with Rock";
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win! Rock beats Scissors";
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    return "You lose! Paper beats Rock";
  }

  //   PAPER
  if (playerChoice === "paper" && computerChoice === "paper") {
    return "It's a draw! Paper draws with Paper";
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win! Paper beats Rock";
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You lose! Scissors beats Paper";
  }

  //   SCISSORS
  if (playerChoice === "scissors" && computerChoice === "scissors") {
    return "It's a draw! Scissors draws with Scissors";
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win! Scissors beatsPaper";
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You lose! Rock beats Scissors";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
