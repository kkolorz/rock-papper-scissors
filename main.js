const playerScore = document.querySelector('.score__player');
const computerScore = document.querySelector('.score__computer');
const userChoice = document.querySelector('.choice__user');
const computerChoice = document.querySelector('.choice__computer');

const playerOptions = document.querySelectorAll('.options__container i');

const randomBtn = document.querySelector('.container__random--btn');
const resetBtn = document.querySelector('.container__reset--btn');

let resultText = document.querySelector('.result__text');

let playerScoreNum = 0;
let playerChoice = '';
let computerScoreNum = 0;
let compChoice = '';

const computerChoicesOptions = ['ROCK', 'PAPER', 'SCISSORS'];

// Prepare new game
function setGame() {
    computerChoice.innerHTML = '<i class="fa-sharp fa-solid fa-computer"></i>';
    computerChoice.style.color = 'rgba(0, 0, 0, .1)';
    userChoice.innerHTML = '<i class="fa-regular fa-user"></i>';
    userChoice.style.color = 'rgba(0, 0, 0, .1)';
    resultText.textContent = `Let's Play! :)`;
    playerScore.textContent = playerScoreNum;
    computerScore.textContent = computerScoreNum;
}

window.onload = setGame();

// User option select
function userSelect() {
    playerOptions.forEach(item => item.addEventListener('click', item => {
        if(item.target.dataset.option === 'ROCK') {
            userChoice.innerHTML = '<i class="fa-regular fa-hand-back-fist" title="Rock" data-option="ROCK"></i>';
            userChoice.style.color = '#333';
            playerChoice = userChoice.firstChild.dataset.option;
        } else if(item.target.dataset.option === 'PAPER') {
            userChoice.innerHTML = '<i class="fa-regular fa-hand" title="Paper" data-option="PAPER"></i>';
            userChoice.style.color = '#333';
            playerChoice = userChoice.firstChild.dataset.option;
        } else if(item.target.dataset.option === 'SCISSORS') {
            userChoice.innerHTML = '<i class="fa-regular fa-hand-scissors" title="Scissors" data-option="SCISSORS"></i>';
            userChoice.style.color = '#333';
            userChoice.style.transform = 'rotateY(180deg)';
            playerChoice = userChoice.firstChild.dataset.option;
        }
        computerRandomChoice();
        checkResult();
    }))
} userSelect();

// Random computer choice
function computerRandomChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    compChoice = computerChoicesOptions[randomChoice];
    if(compChoice === 'ROCK') {
        computerChoice.innerHTML = '<i class="fa-regular fa-hand-back-fist" title="Rock" data-option="ROCK"></i>';
        computerChoice.style.color = '#333';
        compChoice = computerChoice.firstChild.dataset.option;
    } else if(compChoice === 'PAPER') {
        computerChoice.innerHTML = '<i class="fa-regular fa-hand" title="Paper" data-option="PAPER"></i>';
        computerChoice.style.color = '#333';
        compChoice = computerChoice.firstChild.dataset.option;
    } else if(compChoice === 'SCISSORS') {
        computerChoice.innerHTML = '<i class="fa-regular fa-hand-scissors" title="Scissors" data-option="SCISSORS"></i>';
        computerChoice.style.color = '#333';
        compChoice = computerChoice.firstChild.dataset.option;
    }
}

// Check results of game
function checkResult() {
    let winner = '';

    if (
        (playerChoice === 'ROCK' && compChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && compChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && compChoice === 'PAPER') 
        ) {
        winner = 'You Won!';
        playerScoreNum++;
    } else if(playerChoice === compChoice) {
        winner = 'Tie Game!';
    } else {
        winner = 'You Lose!';
        computerScoreNum++;
    }

    playerScore.innerHTML = playerScoreNum;
    computerScore.innerHTML = computerScoreNum;
    resultText.textContent = winner;
} 

// Reset Game Button
function resetGame() {
    computerChoice.innerHTML = '<i class="fa-sharp fa-solid fa-computer"></i>';
    computerChoice.style.color = 'rgba(0, 0, 0, .1)';
    userChoice.innerHTML = '<i class="fa-regular fa-user"></i>';
    userChoice.style.color = 'rgba(0, 0, 0, .1)';
    resultText.textContent = `Let's Play! :)`;
    playerScore.textContent = playerScoreNum;
    computerScore.textContent = computerScoreNum;
}

// Listeners
resetBtn.addEventListener('click', resetGame);




