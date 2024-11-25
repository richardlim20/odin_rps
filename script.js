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

// const getHumanChoice = () => {
//     let humanInput = prompt("Rock paper or scissors?")
//     humanInput = humanInput.toLocaleLowerCase()
//     let humanChoice = "";
//     switch(humanInput){
//         case "rock":
//             humanChoice = Choices.Rock
//             break;
//         case "paper":
//             humanChoice = Choices.Paper;
//             break;
//         case "scissors":
//             humanChoice = Choices.Scissors;
//     }
//     return humanChoice
// }

// let humanScore = 0;
// let computerScore = 0;

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();


const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let finalResults = "";

    const playRound = (humanChoice, computerChoice) => {
        choicesUI.innerHTML = "You choose " + humanChoice + " Computer Chooses " + computerChoice
        if (humanChoice === Choices.Rock && computerChoice === Choices.Scissors ||
            humanChoice === Choices.Scissors && computerChoice === Choices.Paper ||
            humanChoice === Choices.Paper && computerChoice === Choices.Rock)
            {
                roundResultsUI.innerHTML = "You Win!";
                humanScore++
            }
        else if (humanChoice === Choices.Rock && computerChoice === Choices.Paper ||
                humanChoice === Choices.Scissors && computerChoice === Choices.Rock ||
                humanChoice === Choices.Paper && computerChoice === Choices.Scissors)
            {
                roundResultsUI.innerHTML = "You Lose!";
                computerScore++
            }
    
        else if(humanChoice === computerChoice){
            roundResultsUI.innerHTML = "its a draw!";
        }
    }
    const handleButtonClick = (choiceChosen) => {
        let gameOver = false;
        if (humanScore === 5 || computerScore === 5){
            gameOver = true;
        }
        if(!gameOver){
            humanChoice = choiceChosen;
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            roundNumber++
            updateUI()
        }
        else{
            finalResults = "The final results are: " + humanScore + " to " + computerScore;
            updateUI()
        }
    }

    const updateUI = () => {
        roundNumberUI.innerHTML = roundNumber;
        humanScoreUI.innerHTML = humanScore;
        computerScoreUI.innerHTML = computerScore;
        finalResultsUI.innerHTML = finalResults;
    }

    rockButton.addEventListener("click", () => handleButtonClick(Choices.Rock));
    scissorsButton.addEventListener("click", () => handleButtonClick(Choices.Scissors));
    paperButton.addEventListener("click", () => handleButtonClick(Choices.Paper));
    const roundNumberUI = document.getElementById("round-number");
    roundNumberUI.innerHTML = roundNumber;
    const humanScoreUI = document.getElementById("human-score");
    humanScoreUI.innerHTML = humanScore;
    const computerScoreUI = document.getElementById("computer-score");
    computerScoreUI.innerHTML = computerScore;
    const finalResultsUI = document.getElementById("final-results");
    const choicesUI = document.getElementById("round-choices")
    const roundResultsUI = document.getElementById("round-results")
}
const rockButton = document.getElementById("rock-btn");
const scissorsButton = document.getElementById("scissors-btn");
const paperButton = document.getElementById("paper-btn");


playGame()