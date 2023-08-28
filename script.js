let playerScore = 0, computerScore = 0;

const playerSCoreBoard = document.querySelector("#playerScoreBoard");
const computerSCoreBoard = document.querySelector("#computerScoreBoard");
const playerChoice = document.querySelector("#player-img");
const computerChoice = document.querySelector("#comp-img");
const outcome = document.querySelector(".outcome");
const pImg = document.createElement("img");
const cImg = document.createElement("img");

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

    if (player == "rock" && computerSelection == "scissors"){
        playerScore++;
        outcome.innerHTML = "You Win!";
        pImg.src = `images/${player}.png`;
        playerChoice.appendChild(pImg);
        cImg.src = `images/${computerSelection}.png`;
        computerChoice.appendChild(cImg);
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else if (player == "scissors" && computerSelection == "paper"){
        playerScore++;
        outcome.innerHTML = "You Win!";
        pImg.src = `images/${player}.png`;
        playerChoice.appendChild(pImg);
        cImg.src = `images/${computerSelection}.png`;
        computerChoice.appendChild(cImg);
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else if (player == "paper" && computerSelection == "rock"){
        playerScore++;
        outcome.innerHTML = "You Win!";
        pImg.src = `images/${player}.png`;
        playerChoice.appendChild(pImg);
        cImg.src = `images/${computerSelection}.png`;
        computerChoice.appendChild(cImg);
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else if (player == computerSelection){
        outcome.innerHTML = "Draw!";
        pImg.src = `images/${player}.png`;
        playerChoice.appendChild(pImg);
        cImg.src = `images/${computerSelection}.png`;
        computerChoice.appendChild(cImg);
        playerSCoreBoard.innerHTML = playerScore;
        computerSCoreBoard.innerHTML = computerScore;
    }
    else{
        computerScore++;
        outcome.innerHTML = "You Lose!";
        pImg.src = `images/${player}.png`;
        playerChoice.appendChild(pImg);
        cImg.src = `images/${computerSelection}.png`;
        computerChoice.appendChild(cImg);
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


