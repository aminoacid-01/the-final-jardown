const secondHand = document.querySelector('.second-hand');
const startButton = document.getElementById('start-timer');
const countdownAudio = new Audio(countdownAudioUrl); // Update the path to your countdown.webm file
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
    countdownAudio.currentTime = 0; // Reset the audio to the beginning
    countdownAudio.play(); // Play the countdown audio
    startTimer();
});