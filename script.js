const gameDiv = document.querySelector('#gameDiv');
const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");
let yourScoreAdd = 0;
let computerScoreAdd = 0;

const btn = document.querySelector("#startGame");
btn.addEventListener('click', game); 
//For some reasons, adding the above line causes the game() to run right after opening the page or reloading. After further investigation, using '...game);' instead of '...game());' fixed the problem


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
    gameDiv.append(gameCard);

    const round = document.createElement('div');
    round.classList.add("round");
    round.textContent = "Round " + i + ":";
    gameCard.append(round);

    let yourPick = window.prompt("What is your pick?\n [1] Rock\n [2] Paper \n [3] Scissors\n");
    yourPick = playerSelection(yourPick);
    const userDisplay = document.createElement('div');
    userDisplay.textContent = "You picked " + yourPick + ".";
    gameCard.append(userDisplay);

    let computerPick = getComputerChoice();
    const computerDisplay = document.createElement('div');
    computerDisplay.textContent = "Computer picked " + computerPick + ".";
    gameCard.append(computerDisplay);

    let outcome = playRound(yourPick, computerPick);
    const winnerDisplay = document.createElement('div');
    winnerDisplay.classList.add("winnerDisplay");
    winnerDisplay.textContent = outcome;
    gameCard.append(winnerDisplay);

    if (outcome.slice(4,5) == "W") {
        yourScoreAdd++;
    } else if (outcome.slice(4,5) == "L") {
        computerScoreAdd++;
    } else {yourScoreAdd += 0;}
    yourScore.innerText = yourScoreAdd;
    computerScore.innerText = computerScoreAdd;
}
}

