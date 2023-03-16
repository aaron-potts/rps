function game() {
  const choices = ["rock", "paper", "scissors"];
  const playerSelection = prompt(
    "Choose your weapon: rock, paper or scissors."
  );
  const computerSelection =
    choices[Math.floor(Math.random() * choices.length)];
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "Draw!";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return "You win!";
  } else {
    return "Draw!";
  }
}


function playFirstToThree() {
  let playerTally = 0;
  let computerTally = 0;
  while (playerTally !== 3 && computerTally !== 3) {
    let outcome = game();
    console.log(outcome)
    if (outcome === "You lose!"
    ) {
      computerTally++;
      console.log(computerTally);
    } else if (outcome === "You win!"
    ) {
      playerTally++;
      console.log(playerTally);
    }
  }
  if (playerTally > computerTally) {
    console.log("Congratulations, you won by " + (playerTally - computerTally));
  } else if (playerTally < computerTally) {
    console.log("Ah boo, you lost by " + (computerTally - playerTally));
  }
}
