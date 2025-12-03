let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let result = "";

    document.querySelector(".display-area").style.display = "flex";

    document.getElementById("player-img").src=`${playerChoice}.jpeg`;
    document.getElementById("computer-img").src=`${computerChoice}.jpeg`;

    if(playerChoice === computerChoice){
        result = "It's a Draw";
    }

    else if(
        (playerChoice === "rock" && computerChoice==="scissors")||
        (playerChoice === "paper" && computerChoice==="rock")||
        (playerChoice === "scissors" && computerChoice==="paper")){
            result = "You win!"
            playerScore++;
    }else{
        result = "You lose!"
        computerScore++;
    }
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `player: ${playerScore} | computer: ${computerScore}`;
}