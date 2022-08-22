function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
    case 0: 
        return "Rock";
        break;
    case 1: 
        return "Paper";
        break;
    case 2: 
        return "Scissors";
        break;
    }
    // console.log("The computer picked " + choice + ".");
}

function playerSelection(input){
    switch (input) {
    case 1:
    case "rock":
        return "Rock";
        break;
    case 2: 
        return "Paper";
        break;
    case 3: 
        return "Scissors";
        break;
    default: 
        return "An invalid choice!";
        break;
    }
}

function rockPS (yourPick, computerPick) {
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
    } else {
        if (computerPick === "Rock") {
            return "You Win! Paper beats Rock.";
        } else {return "You Lose! Scissors beats Paper";}
    }
}


const { get } = require('https');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
rl.setPrompt('What is your pick? \n[1] Rock \n[2] Paper \n[3] Scissors \n...');
rl.prompt();
rl.on('line', (input) => { 

let yourPick = playerSelection(+input);

if (yourPick !== "An invalid choice!") {
    console.log("You picked " + yourPick + "."); 
    let computerPick = getComputerChoice();
    console.log("Computer picked " + computerPick + ".");
    console.log(rockPS(yourPick, computerPick));
    var yourScore = 0;
    var computerScore = 0;
    if (rockPS(yourPick, computerPick).substr(4,1)=="W") {
        yourScore++; 
    } else if (rockPS(yourPick, computerPick).substr(4,1)=="L") {
        computerScore++;
    } else {yourScore+= 0;}
    console.log("(Your score) " + yourScore + " - " + computerScore + " (Computer's Score)");
    rl.close();
    
} else {
        console.log(yourPick + ". Ctrl + C to end the program.");
        return;
}
});


