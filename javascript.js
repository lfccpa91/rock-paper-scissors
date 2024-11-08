function getComputerChoice() {
    let choice = Math.random();
    if (choice<=0.33) {
        return "rock";
    } else if (choice<=0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

 function getHumanChoice() {
    return prompt("Pick:  rock, paper, or scissors?");
}

let humanScore=0;
let computerScore=0;

const resultsDiv = document.createElement('div');
resultsDiv.style.margin = "10px";
const pageBody = document.querySelector('body');
pageBody.appendChild(resultsDiv);

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()
  
    if (humanChoice===computerChoice) {
        resultsDiv.style.fontWeight = "normal";
        resultsDiv.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} - Its a tie! Current Score is Human: ${humanScore} Computer: ${computerScore}.`;
    } else if ((humanScore<4)&&((humanChoice==="rock" && computerChoice === "scissors")||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper"))) {
        humanScore++;
        resultsDiv.style.fontWeight = "normal";
        resultsDiv.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} - You win this round! Current Score is Human: ${humanScore} Computer: ${computerScore}.`;
    } else if ((computerScore<4)&&((humanChoice==="paper" && computerChoice === "scissors")||(humanChoice==="scissors" && computerChoice==="rock")||(humanChoice==="rock" && computerChoice==="paper"))) {
        computerScore++;
        resultsDiv.style.fontWeight = "normal";
        resultsDiv.textContent =`You chose ${humanChoice} and the computer chose ${computerChoice} - the computer wins! Current Score is Human: ${humanScore} Computer: ${computerScore}.`;
    } else if ((humanScore===4)&&((humanChoice==="rock" && computerChoice === "scissors")||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper"))) {
        humanScore++;
        resultsDiv.style.fontWeight = "bold";
        resultsDiv.textContent = `You win the game! Final Score is Human: ${humanScore} Computer: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    } else {
        computerScore++;
        resultsDiv.style.fontWeight = "bold";
        resultsDiv.textContent = `Computer wins the game! Final Score is Human: ${humanScore} Computer: ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    }
}

const gameButtons = document.querySelectorAll("button");
gameButtons.forEach((button) => {
    button.addEventListener("click",() => {
        playRound(button.id, getComputerChoice());
    });
});


function playGame() {
    humanScore=0;
    computerScore=0;
    for (i=1; i<=5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(`Game over! Final score - Human ${humanScore} Computer ${computerScore}. ${(humanScore>computerScore) ? "You win!": (humanScore<computerScore) ? "You lose!": "It's a tie!"}`);
    let playAgain = prompt("Play again? (Y/N)");
    if (playAgain === "Y") {
        playGame();
    }
}

//playGame()