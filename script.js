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
