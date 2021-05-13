const computerOptions = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let tie = 0;
const buttons = Array.from(document.querySelectorAll('button'));
const results = document.querySelector('.results');
const choices = document.querySelector('.choices');

function computerPlay() {
  let x = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return x;
}

function playGame(e) {
  let playerChoice = e.target.id;
  let computerChoice = computerPlay();
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }
  else if (playerChoice === computerChoice) {
    tie++;
    results.textContent = `It's a tie! You both chose ${playerChoice}. ${playerScore}-${computerScore}`;
  }
  else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    results.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}. ${playerScore}-${computerScore}`;
  }
  else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    results.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}. ${playerScore}-${computerScore}`;
  }
  else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    results.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}. ${playerScore}-${computerScore}`;
  }
  else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    results.textContent = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}. ${playerScore}-${computerScore}`;
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    results.textContent = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}. ${playerScore}-${computerScore}`;
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    results.textContent = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}. ${playerScore}-${computerScore}`;
  }    
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
    results.textContent = `You won the game! The score was ${playerScore} - ${computerScore}.`;
    choices.textContent = 'Refresh the page to play again';
    return;
    }
    else if (playerScore < computerScore) {
      results.textContent = `You lost the game! The score was ${computerScore} - ${playerScore}.`;
      choices.textContent = 'Refresh the page to play again';
      return;
    }
    else {
      results.textContent = `The game was a tie! The score was ${computerScore} - ${playerScore}.`;
      choices.textContent = 'Refresh the page to play again';
      return;
    }
  }     
      choices.textContent = `You chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}. The computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
} 
    
buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});