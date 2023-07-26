function game(){
let playerScore = 0, computerScore = 0;

for(let i = 0; i < 5; i++){
let playerSelection = prompt("Rock, Paper, or Scissors")

function playRound(playerSelection, computerSelection){


    let player = playerSelection.toLowerCase();

    if (player == "rock" && computerSelection == "scissors"){
        playerScore++;
        console.log("Player: "+ player + " Computer: "+ computerSelection);
        console.log("You Win!");
        console.log("Player: "+ playerScore + " Computer: "+ computerScore);
    }
    else if (player == "scissors" && computerSelection == "paper"){
        playerScore++;
        console.log("Player: "+ player + " Computer: "+ computerSelection);
        console.log("You Win!");
        console.log("Player: "+ playerScore + " Computer: "+ computerScore);
    }
    else if (player == "paper" && computerSelection == "rock"){
        playerScore++;
        console.log("Player: "+ player + " Computer: "+ computerSelection);
        console.log("You Win!");
        console.log("Player: "+ playerScore + " Computer: "+ computerScore);
    }
    else if (player == computerSelection){
        console.log("Player: "+ player + " Computer: "+ computerSelection);
        console.log("Draw");
        console.log("Player: "+ playerScore + " Computer: "+ computerScore);
    }
    else{
        computerScore++;
        console.log("Player: "+ player + " Computer: "+ computerSelection);
        console.log("You Lose!");
        console.log("Player: "+ playerScore + " Computer: "+ computerScore);
    }
}

function getComputedSelection(){
    let number = Math.floor(Math.random()*3) + 1;
    let compSeletion;

    switch(number){
        case 1:
            compSeletion = "rock";
            break;
        case 2:
            compSeletion = "paper";
            break;
        case 3: 
            compSeletion = "scissors";
            break;
    }

    return compSeletion;
}

const computerSelection = getComputedSelection();

console.log(playRound(playerSelection, computerSelection));
}}

