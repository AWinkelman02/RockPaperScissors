let playerScore = 0, computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener("click", function(){
    let compSelection = getComputedSelection();
    let playerSelection = this.id;
    playRound(playerSelection, compSelection);
});
})




function playRound(playerSelection, computerSelection){

    let player = playerSelection;
    const playerSCoreBoard = document.querySelector("#playerScoreBoard");
    const computerSCoreBoard = document.querySelector("#computerScoreBoard");
    const playerChoice = document.querySelector("#playerSelection");
    const computerChoice = document.querySelector("#computerSelection");
    const outcome = document.querySelector(".outcome");

    if (player == "rock" && computerSelection == "scissors"){
        playerScore++;
        outcome.innerHTML = "You Win!";
        playerChoice.innerHTML = player;
        computerChoice.innerHTML = computerSelection;
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else if (player == "scissors" && computerSelection == "paper"){
        playerScore++;
        outcome.innerHTML = "You Win!";
        playerChoice.innerHTML = player;
        computerChoice.innerHTML = computerSelection;
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else if (player == "paper" && computerSelection == "rock"){
        playerScore++;
        outcome.innerHTML = "You Win!";
        playerChoice.innerHTML = player;
        computerChoice.innerHTML = computerSelection;
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else if (player == computerSelection){
        outcome.innerHTML = "Draw!";
        playerChoice.innerHTML = player;
        computerChoice.innerHTML = computerSelection;
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else{
        computerScore++;
        outcome.innerHTML = "You Lose!";
        playerChoice.innerHTML = player;
        computerChoice.innerHTML = computerSelection;
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
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


