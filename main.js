const playerScore = document.querySelector('.score__player');
const computerScore = document.querySelector('.score__computer');
const userChoice = document.querySelector('.choice__user');
const computerChoice = document.querySelector('.choice__computer');

const playerOptions = document.querySelector('.options__container');

const randomBtn = document.querySelector('.container__random--btn');
const resetBtn = document.querySelector('.container__reset--btn');

let playerScoreNum = 0;
let computerScoreNum = 0;

// Computer Random Choise
function computerRandomChoice() {
    const compChoice = Math.floor(Math.random() * 3 + 1);
        switch(compChoice) {
            case 1:
                computerChoice.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
                computerChoice.style.color = '#333';
                break;
            case 2:
                computerChoice.innerHTML = `<i class="fa-regular fa-hand"></i>`;
                computerChoice.style.color = '#333';
                break;
            case 3:
                computerChoice.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
                computerChoice.style.color = '#333';
                break;
        }
} computerRandomChoice();


function resetGame() {
    computerChoice.innerHTML = '<i class="fa-sharp fa-solid fa-computer"></i>';
    computerChoice.style.color = 'rgba(0, 0, 0, .1)';
    userChoice.innerHTML = '<i class="fa-regular fa-user"></i>';
    userChoice.style.color = 'rgba(0, 0, 0, .1)';
    playerScoreNum = 0;
    computerScoreNum = 0;
}


// Listeners
resetBtn.addEventListener('click', resetGame)