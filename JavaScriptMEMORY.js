const startButton = document.querySelector('#start-btn');
const pauseButton = document.querySelector('#pause-btn');
const resetButton = document.querySelector('#reset-btn');
const timerDisplay = document.querySelector('#timer-display');
const backToMenuButton = document.querySelector('.back-button');

let timeLeft = 60;
let timerIntervalId;

startButton.addEventListener('click', function () {
    timerIntervalId = setInterval(function () {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timerIntervalId);
        }
        updateTimerDisplay();
    }, 1000);
});

pauseButton.addEventListener('click', function () {
    clearInterval(timerIntervalId);
});

resetButton.addEventListener('click', function () {
    timeLeft = 60;
    clearInterval(timerIntervalId);
    updateTimerDisplay();
});

backToMenuButton.addEventListener('click', function () {
    window.location.href = 'Games.html';
});

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
