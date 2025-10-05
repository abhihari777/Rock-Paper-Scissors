let compScore = 0;
let userScore = 0;

let buttons = document.querySelectorAll(".game");

let lastMsg = document.querySelector("#last-msg");

let Computersscore = document.querySelector("#comp-score");
let Usersscore = document.querySelector("#user-score");

const gencompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let choseIdx = Math.floor(Math.random()*3);
    let chosen = choices[choseIdx];
    return chosen;

}

const showWinner = (userWin) => {
    if(userWin) {
        lastMsg.innerText = "You Won!"  
        userScore++;
        Usersscore.innerText = userScore;
    }
    else{
        lastMsg.innerText = "You Lost"
        compScore++;
        Computersscore.innerText = compScore;
    }

}

const playgame = (userChoice) => {
    // comp choice
    const compChoice = gencompChoice();

    if(userChoice === compChoice) {
        lastMsg.innerText = "Game was a Draw";
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

buttons.forEach((game) => {
    game.addEventListener("click", () => {
        const userChoice = game.getAttribute("id");
        playgame(userChoice);
    })

})