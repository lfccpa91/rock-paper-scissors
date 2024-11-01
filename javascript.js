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

let humanScore;
let computerScore;

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice===computerChoice) {
        console.log("It's a tie, try again!");
    } else if ((humanChoice==="rock" && computerChoice === "scissors")||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissors" && computerChoice==="paper")) {
        humanScore++;
        console.log(`You win - ${humanChoice} beats ${computerChoice}.\n\nCurrent Score is Human: ${humanScore} Computer: ${computerScore}.`);
    } else {
        computerScore++;
        console.log(`You lose - ${computerChoice} beats ${humanChoice}.\n\nCurrent Score is Human: ${humanScore} Computer: ${computerScore}.`);
    }
}

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

playGame()