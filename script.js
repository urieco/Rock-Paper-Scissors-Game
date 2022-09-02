const gameDiv = document.querySelector('#gameDiv');

const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");
let yourScoreAdd = 0;
let computerScoreAdd = 0;

const iconDisplay = document.querySelector(".icon-display");

function toggleIcon() {
    iconDisplay.classList.toggle("hide-at-start");
    (btn.innerText === "Start Round") ? btn.innerText = "Hide Selections" : btn.innerText = "Start Round";
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector('.scissors');

let yourPick = 0;

rock.addEventListener('click', (e) => {
    yourPick = 1;
    game();
}) ;
paper.addEventListener('click', (e) => {
    yourPick = 2;
    game();
});
scissors.addEventListener('click', (e) => {
    yourPick = 3;
    game();
});

function getPlayerChoice(input){
    if (input == 1) {
        return "Rock";
    } else if (input == 2) {
        return "Paper";
    } else if (input == 3) {
        return "Scissors";
    } else {return "an invalid choice."}
}

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

function showResult (yourPick, computerPick) {
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

function addScore(outcome) {
    if (outcome.slice(4,5) == "W") {
        yourScoreAdd++;
    } else if (outcome.slice(4,5) == "L") {
        computerScoreAdd++;
    } else {yourScoreAdd += 0;}
}

let roundNum = 0;

function game() {
    const gameCard = document.createElement('div');
    gameCard.classList.add("logContainer");
    gameDiv.append(gameCard); 

    roundNum++;
    yourPick = getPlayerChoice(yourPick);
    let computerPick = getComputerChoice();
    let outcome = showResult(yourPick, computerPick);
        
    const gameLog = document.createElement("div");
    gameCard.append(gameLog);
    gameLog.innerText = "Round " + roundNum + "\n"
                        +"You picked " + yourPick + ".\n"
                        + "Computer picked " + computerPick + ". \n"
                        + outcome + ". \n ---- 0 ---- \n"
                        + "The round is over! \n\n";
   
    addScore(outcome);
    yourScore.innerText = yourScoreAdd;
    computerScore.innerText = computerScoreAdd;    
}

const btn = document.querySelector("#startGame");
btn.addEventListener('click', toggleIcon); 
//Using '...game());' causes the function to start right after loading or reloading the page. '...game);' fixed the issue.

const clearBtn = document.querySelector("#clearLog");
clearBtn.addEventListener('click', () =>
    document.querySelectorAll(".logContainer").forEach(el => el.remove()));

const resetScoreBtn = document.querySelector("#resetScore");
resetScoreBtn.addEventListener('click', () => {
    document.querySelector("#yourScore").innerText = "0";
    document.querySelector("#computerScore").innerText = "0";
    yourScoreAdd = 0;
    computerScoreAdd = 0;
    roundNum = 0;
});

//Additional animation effects
    const keys = document.querySelectorAll(".choice");
    keys.forEach(key => key.addEventListener("mouseenter", () => key.classList.add("mouseover")));
    keys.forEach(key => key.addEventListener("mouseleave", () => key.classList.remove("mouseover")));
