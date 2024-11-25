const Choices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
}

const getComputerChoice = () => {
    let computerChoice = "";
    randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            computerChoice = Choices.Rock;
            break;
        case 1:
            computerChoice = Choices.Paper;
            break;
        case 2:
            computerChoice = Choices.Scissors;
    }
    return computerChoice
}

const getHumanChoice = () => {
    let humanInput = prompt("Rock paper or scissors?")
    humanInput = humanInput.toLocaleLowerCase()
    let humanChoice = "";
    switch(humanInput){
        case "rock":
            humanChoice = Choices.Rock
            break;
        case "paper":
            humanChoice = Choices.Paper;
            break;
        case "scissors":
            humanChoice = Choices.Scissors;
    }
    return humanChoice
}

// let humanScore = 0;
// let computerScore = 0;

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();


const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let humanChoice = "";
    let computerChoice = "";

    const playRound = (humanChoice, computerChoice) => {
        console.log("You choose " + humanChoice + " Computer Chooses " + computerChoice)
        if (humanChoice === Choices.Rock && computerChoice === Choices.Scissors ||
            humanChoice === Choices.Scissors && computerChoice === Choices.Paper ||
            humanChoice === Choices.Paper && computerChoice === Choices.Rock)
            {
                console.log("You Win!")
                humanScore++
            }
        else if (humanChoice === Choices.Rock && computerChoice === Choices.Paper ||
                humanChoice === Choices.Scissors && computerChoice === Choices.Rock ||
                humanChoice === Choices.Paper && computerChoice === Choices.Scissors)
            {
                console.log("You Lose!")
                computerScore++
            }
    
        else if(humanChoice === computerChoice){
            console.log("its a draw!");
        }
    }

    for (roundNumber; roundNumber <= 5; roundNumber++){
        console.log("Round: " + roundNumber)
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }
}

playGame()