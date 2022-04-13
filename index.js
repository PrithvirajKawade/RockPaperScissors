function computerPlay() {
    
    // computer chooses its choice

    let result = Math.floor(Math.random() * 3) + 1

    if (result === 1) {
        return ("rock")
    }
    else if (result === 2) {
        return ("Paper")
    }
    else if (result === 3) {
        return ("Scissors")
    }

}

    const reset = document.querySelector(".ties")
    reset.textContent = "Choose Rock, Paper or Scissors!"
    

function startGame() {
    // get id from image as input choice from the user
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img) =>
        img.addEventListener('click', () => {
            // if id is present then its playerchoice as computer choice has no id
            if (img.id) {
                let computerSelection = computerPlay().toUpperCase()
                // playround with both inputs
                console.log(playRound(img.id, computerSelection))
            }       
        })
    )
}

// start the game
startGame()
// set all scores to 0
let playerWins = 0
let computerWins = 0
let totalTies = 0

function points(){
    // if player wins add score to player points
    if(pwon === 1){
        const singlePoint = document.querySelector(".points")
        singlePoint.textContent = ""
        playerWins++
        singlePoint.append(`Player Points : ${playerWins}`)
    }
    else if (pwon ===2){
        // if it ties add point to tie count
        const tie = document.querySelector(".ties")
        tie.textContent = ""
        totalTies++
        tie.append(`Ties: ${totalTies}`)
    }
    else if (pwon===3){
        // if computer wins add score to computer points
        const cPoint = document.querySelector(".cpoints")
        cPoint.textContent = ""
        computerWins++
        cPoint.append(`Computer Points : ${computerWins}`)
    }
    rounds++

}
let pwon = 0

// check if playerpoints exceeds 5 or not if it does end the code
// and annouce the result

function playRound(playerSelection, computerSelection) {
    if(playerWins >=5 ){
        const gameO = document.querySelector(".gameOver")
        gameO.textContent = ""
        gameO.append("You Win! Congrats!")
        return
    }
    else if(computerWins>=5){
        const gameO = document.querySelector(".gameOver")
        gameO.textContent = ""
        gameO.append("You Lost! Computer Wins!")
        return
    }



const result = document.querySelector(".finalResults")
// compare player choice and computer choice and display it 
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        result.textContent = ""
        result.append("You Lose! Paper beats Rock!")
        // check for if player wins or loses and adds points
        pwon = 3
        points()
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        result.textContent = ""
        result.append("You Win! Rock beats Scissors!")
        pwon = 1
        points()
    }
    else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        result.textContent = ""
        result.append("TIE")
        pwon = 2
        points()
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        result.textContent = ""
        result.append("You Win! Paper beats Rock!")
        pwon = 1
        points()
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        result.textContent = ""
        result.append("You Lose! Scissors beats Paper!")
        pwon = 3
        points()
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        result.textContent = ""
        result.append("TIE!")
        pwon = 2
        points()
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        result.textContent = ""
        result.append("You Lose! Rock beats Scissors!")
        pwon = 3
        points()
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        result.textContent = ""
        result.append("You Win! Scissors beats Paper!")
        pwon = 1
        points()
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        result.textContent = ""
        result.append("TIE!")
        pwon = 2
        points()
    }
      
}

// to overcome event bubbling

if(playerWins >5 || computerWins > 5){
    startGame()
}