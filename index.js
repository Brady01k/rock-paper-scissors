//function to get the random choice from computer
let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerChoice = options[(Math.random() * options.length) | 0]
    return computerChoice
}
//function to get users choice of rock paper or scissors
function getUserChoice() {
    let userChoice = prompt("Please make your choice, rock, paper, or scissors: ")
    return userChoice
}


//function to play a round comparing user choice to computer choice with a win lose and draw conditional
function playRound(getComputerChoice,getUserChoice) {
    if (getComputerChoice === "rock" && getUserChoice === "scissors") {
        return alert("You lose. Rock beats scissors :(")
    }
    else if (getComputerChoice === "rock" && getUserChoice ==="rock") {
        return alert("You both chose rock. It's a tie.")
    }
    else if (getComputerChoice === "rock" && getUserChoice === "paper") {
        return alert("You win. Paper beats rock :)")
    }
    else if (getComputerChoice === "paper" && getUserChoice === "rock") {
        return alert("You lose. Paper beats rock :(")
    }
    else if (getComputerChoice === "paper" && getUserChoice === "paper") {
        return alert("You both chose paper. It's a tie.")
    }
    else if (getComputerChoice === "paper" && getUserChoice === "scissors") {
        return alert("You win. Scissors beats paper :)")
    }
    else if (getComputerChoice === "scissors" && getUserChoice === "rock") {
        return alert("You win. Rock beats scissors :)")
    }
    else if (getComputerChoice === "scissors" && getUserChoice === "paper") {
       return alert("You lose. Scissors beats paper :(")
    }
    else if (getComputerChoice === "scissors" && getUserChoice === "scissors") {
        return alert("You both chose scissors. It's a tie.")
    }
}

console.log(playRound(getComputerChoice(),getUserChoice()))