//function to get the random choice from computer
let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerChoice = options[(Math.random() * options.length) | 0]
    return computerChoice
}
//function to get users choice of rock paper or scissors

const UserChoice = prompt("Please make your choice, rock, paper, or scissors: ").toLowerCase()
const ComputerChoice = getComputerChoice()

//function to play a round comparing user choice to computer choice with a win lose and draw conditional
function playRound(ComputerChoice,UserChoice) {
    if (ComputerChoice === "rock" && UserChoice === "scissors") {
        return alert("You lose. Rock beats scissors :(")
    }
    else if (ComputerChoice === "rock" && UserChoice ==="rock") {
        return alert("You both chose rock. It's a tie.")
    }
    else if (ComputerChoice === "rock" && UserChoice === "paper") {
        return alert("You win. Paper beats rock :)")
    }
    else if (ComputerChoice === "paper" && UserChoice === "rock") {
        return alert("You lose. Paper beats rock :(")
    }
    else if (ComputerChoice === "paper" && UserChoice === "paper") {
        return alert("You both chose paper. It's a tie.")
    }
    else if (ComputerChoice === "paper" && UserChoice === "scissors") {
        return alert("You win. Scissors beats paper :)")
    }
    else if (ComputerChoice === "scissors" && UserChoice === "rock") {
        return alert("You win. Rock beats scissors :)")
    }
    else if (ComputerChoice === "scissors" && UserChoice === "paper") {
       return alert("You lose. Scissors beats paper :(")
    }
    else if (ComputerChoice === "scissors" && UserChoice === "scissors") {
        return alert("You both chose scissors. It's a tie.")
    }
}

console.log(playRound(ComputerChoice,UserChoice))