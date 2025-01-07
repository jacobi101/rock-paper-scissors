/* Rock is 0, Paper is 1, Scissors is 2 - so says Jacob*/
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getUserChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

function playRound (userChoice, computerChoice) { 
    let computerWin = 0;
    let userWin = 0;
    let result = 0;

    console.log("You chose " + userChoice + "!");
    console.log("Let's see what the computer chose!");
    console.log("The number it chose was " + computerChoice);

    if (computerChoice == 0) {
        computerChoice = "rock"
    } else if (computerChoice == 1) { 
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    console.log("It chose " + computerChoice + "!");

    if (userChoice == "rock" && computerChoice == "rock") {
        console.log("Two rocks! It's a tie!");
    } else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("You chose rock and the computer chose paper, the computer wins!");
        computerWin = 1;
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        console.log("You chose rock and the computer chose scissors, you win!");
        userWin = 1;
    } else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("You chose paper and the computer chose rock, you win!");
        userWin = 1;
    } else if (userChoice == "paper" && computerChoice == "paper") {
        console.log("Two papers! It's a tie!");
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log("You chose paper and the computer chose scissors, the computer wins!");
        computerWin = 1;
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log("You chose scissors and the computer chose rock, the computer wins!");
        computerWin = 1;
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log("You chose scissors and the computer chose paper, you win!");
        userWin = 1;
    } else if (userChoice == "scissors" && computerChoice == "scissors") {
        console.log("Two scissors! It's a tie!");
    }

    /* User Win is 0, Computer Win is 1, Tie is 2 */
    if (userWin == 1 && computerWin == 0) {
        return result;
    } else if (userWin == 0 && computerWin == 1) {
        result = 1;
        return result;
    } else {
        result = 2;
        return result;
    }
}

function playGame () {
    let userScore = 0;
    let computerScore = 0;
    let round = 1;

    console.log("Welcome to Rock, Paper, Scissors! Who will be champion after 5 rounds?? You?? Or Skynet?????? Let's Begin!")

    for (let i = 0; i < 5; i++) {
       console.log("Round " + round + "!")
       let result = playRound(getUserChoice(), getComputerChoice(), userScore, computerScore); 

        if (result == 0) {
            userScore ++;
        } else if (result == 1) {
            computerScore++;
        }

        console.log("That makes the score:");
        console.log("You: " + userScore);
        console.log("Computer: " + computerScore);

       round++;
    }

    console.log("That concludes that Rock, Paper, Scissors match for the universe!! The final results are:");
    console.log("Humans: " + userScore);
    console.log("Skynet: " + computerScore);

    if (userScore > computerScore) { 
        console.log("Carbon life once again proves supreme! Humans win!")
    } else if (computerScore > userScore) {
        console.log("Skynet proves to be the next evolution of life! Computers win!!")
    } else {
        console.log("I don't believe it! Humans and computers are tied! They must work on peaceful cohabitation now.")
    }
}

playGame();