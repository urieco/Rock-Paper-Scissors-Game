const gameDiv = document.querySelector('#gameDiv');

const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");
let yourScoreAdd = 0;
let computerScoreAdd = 0;

const btn = document.querySelector("#startGame");
btn.addEventListener('click', game); 
//Using '...game());' causes the function to start right after loading or reloading the page. '...game);' fixed the issue.

const clearBtn = document.querySelector("#clearLog");
clearBtn.addEventListener('click', () =>
    document.querySelectorAll(".logContainer").forEach(el => el.remove()));
//clearBtn doesn't work

const clearScoreBtn = document.querySelector("#clearScore");
clearScoreBtn.addEventListener('click', () => {
    document.querySelector("#yourScore").innerHTML = "0";
    document.querySelector("#computerScore").innerHTML = "0";
    yourScoreAdd = 0;
    computerScoreAdd = 0;
})

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    switch (choice) {
    case 1: 
        return "Rock";
        break;
    case 2: 
        return "Paper";
        break;
    case 3: 
        return "Scissors";
        break;
    }
}

function playerSelection(input){
    if (input == 1 || input.toLowerCase() == "rock") {
        return "Rock";
    } else if (input == 2 || input.toLowerCase() == "paper") {
        return "Paper";
    } else if (input == 3 || input.toLowerCase() == "scissors") {
        return "Scissors";
    } else {return "an invalid choice."}
}

function playRound (yourPick, computerPick) {
    if (yourPick === computerPick) {
        return "It's a draw"; 
    } else if (yourPick === "Rock") {
        if (computerPick === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {return "You Lose! Paper beats Rock";}
    } else if (yourPick === "Scissors") {
        if (computerPick === "Paper") {
            return "You Win! Scissors beats Paper";
        } else {return "You Lose! Rock beats Scissors";}
    } else if (yourPick === "Paper") {
        if (computerPick === "Rock") {
            return "You Win! Paper beats Rock.";
        } else {return "You Lose! Scissors beats Paper";}
    } else {return "You Lose by Default"}
}
       

function game() {
    for (let i = 1; i < 6; i++) {

    const gameCard = document.createElement('div');
    gameCard.classList.add("logContainer");
    gameDiv.append(gameCard);

    const round = document.createElement('div');
    round.classList.add("round");
    round.textContent = "Round " + i + ":";
    gameCard.append(round);

    let yourPick = window.prompt("What is your pick?\n [1] Rock\n [2] Paper \n [3] Scissors\n");
    
    yourPick = playerSelection(yourPick);
    let computerPick = getComputerChoice();
    let outcome = playRound(yourPick, computerPick);
    
   const gameLog = document.createElement("div");
   gameLog.classList.add("gameLog");
   gameCard.append(gameLog);
    gameLog.innerText = "You picked " + yourPick + ".\n"
    + "Computer picked " + computerPick + ". \n"
    + outcome + ". \n --- 0 ----";
   

    if (outcome.slice(4,5) == "W") {
        yourScoreAdd++;
    } else if (outcome.slice(4,5) == "L") {
        computerScoreAdd++;
    } else {yourScoreAdd += 0;}
    yourScore.innerText = yourScoreAdd;
    computerScore.innerText = computerScoreAdd;
    }

    const roundOver = document.createElement('div');
    gameDiv.append(roundOver);
    roundOver.classList.add("logContainer");
    roundOver.innerText = "The round is over! \n"
}
console.log(yourScore);
