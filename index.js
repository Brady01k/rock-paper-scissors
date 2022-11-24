//function to get the random choice from computer
let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerChoice = options[(Math.random() * options.length) | 0]
    return computerChoice
}
//function to get users choice of rock paper or scissors
//function to play a round comparing user choice to computer choice with a win lose and draw conditional
