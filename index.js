function computerPlay() {
    let result = Math.floor(Math.random() * 3) + 1
    if (result === 1) {
        return ("Rock")
    }
    else if (result === 2) {
        return ("Paper")
    }
    else if (result === 3) {
        return ("Scissors")
    }

}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return ("You Lose! Paper beats Rock!")
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return ("You Win! Rock beats Scissors!")
    }
    else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        return ("TIE")
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return ("You Win! Paper beats Rock!")
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return ("You Lose! Scissors beats Paper!")
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        return ("TIE!")
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return ("You Lose! Rock beats Scissors!")
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return ("You Win! Scissors beats Paper!")
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return ("TIE!")
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        let computerSelection = computerPlay().toUpperCase()
        let playerSelection = prompt("Choose Rock, Paper or Scissors").toUpperCase()
        while (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
            playerSelection = prompt("Invalid Selection! Choose only Rock, Paper or Scissors!").toUpperCase()
        }

        console.log(playRound(playerSelection, computerSelection))
    }
}


let gameon = 1
function playGame() {
    while (gameon === 1) {
        game()
        const playAgain = prompt("Do you want to Play Again? Y or N").toUpperCase()
        if (playAgain === "Y") {
            gameon = 1;
        }
        else if (playAgain === "N") {
            gameon = 0;
        }
    }
    console.log("You Quit! Thank You For Playing!")
}
playGame()