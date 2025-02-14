const secondHand = document.querySelector('.second-hand');
const startButton = document.getElementById('start-timer');
let timerInterval;

function startTimer() {
    let seconds = 0;

    function updateTimer() {
        seconds++;
        const secondsDegrees = ((seconds / 30) * 180) + 90; // Adjusted to 180 degrees for 30 seconds
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        if (seconds >= 30) {
            clearInterval(timerInterval);
        }
    }

    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}

startButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Clear any existing timer
    secondHand.style.transform = 'rotate(90deg)'; // Reset the hand position
    startTimer();
});