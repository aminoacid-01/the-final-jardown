const numbersGame = {
    selectedNumbers: [],
    highNumbers: [25, 50, 75, 100],
    lowNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    targetNumber: null,
    score: 0,

    pickNumber(type, tile) {
        if (this.selectedNumbers.length < 6) {
            let selectedNumber;
            if (type === 'high' && this.highNumbers.length > 0) {
                const randomIndex = Math.floor(Math.random() * this.highNumbers.length);
                selectedNumber = this.highNumbers.splice(randomIndex, 1)[0];
            } else if (type === 'low') {
                const randomIndex = Math.floor(Math.random() * this.lowNumbers.length);
                selectedNumber = this.lowNumbers.splice(randomIndex, 1)[0];
            }

            if (selectedNumber !== undefined) {
                this.selectedNumbers.push(selectedNumber);
                tile.innerHTML = selectedNumber;
                tile.classList.add('revealed');
                this.moveToSelectedNumbers(tile);
                this.updateSelectedNumbers();
            }
        }
    },

    moveToSelectedNumbers(tile) {
        const selectedNumbersDiv = document.getElementById('selected-numbers');
        selectedNumbersDiv.appendChild(tile);
    },

    updateSelectedNumbers() {
        if (this.selectedNumbers.length === 6) {
            this.generateTargetNumber();
        }
    },

    generateTargetNumber() {
        const min = 101;
        const max = 999;
        this.targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const targetNumberDiv = document.getElementById('target-number');
        const targetNumberTitle = document.getElementById('target-number-title');
        targetNumberTitle.innerHTML = 'Target Number';
        targetNumberDiv.innerHTML = `${this.targetNumber}`;
        targetNumberDiv.classList.remove('hidden');
    },

    submitGuess() {
        const guessInput = document.getElementById('guess-input').value;
        const guessResultDiv = document.getElementById('guess-result');
        const guess = parseInt(guessInput, 10);

        if (isNaN(guess)) {
            guessResultDiv.innerHTML = `Your answer "${guessInput}" is not a valid number.`;
        } else {
            const difference = Math.abs(guess - this.targetNumber);
            let points = 0;

            if (guess === this.targetNumber) {
                points = 10;
                guessResultDiv.innerHTML = `Your answer "${guessInput}" is correct! You scored ${points} points.`;
            } else if (difference <= 5) {
                points = 7;
                guessResultDiv.innerHTML = `Your answer "${guessInput}" is close! You scored ${points} points.`;
            } else if (difference <= 10) {
                points = 5;
                guessResultDiv.innerHTML = `Your answer "${guessInput}" is not too far off. You scored ${points} points.`;
            } else {
                guessResultDiv.innerHTML = `Your answer "${guessInput}" is incorrect. The correct number was ${this.targetNumber}. You scored ${points} points.`;
            }

            this.score += points;
            this.updateScore();
            document.getElementById('play-again-btn').classList.remove('hidden');
        }
    },

    updateScore() {
        const scoreDiv = document.getElementById('score');
        scoreDiv.innerHTML = `Score: ${this.score}`;
    },

    resetGame() {
        this.selectedNumbers = [];
        this.highNumbers = [25, 50, 75, 100];
        this.lowNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.targetNumber = null;
        // bring the tiles back after reset
        document.querySelectorAll('.tile').forEach(tile => {
            const type = tile.getAttribute('data-type');
            if (type === 'high') {
                document.getElementById('high-numbers').appendChild(tile);
            } else if (type === 'low') {
                document.getElementById('low-numbers').appendChild(tile);
            }
        });

        document.getElementById('selected-numbers').innerHTML = '';
        document.querySelectorAll('.tile').forEach(tile => {
            tile.innerHTML = '';
            tile.classList.remove('revealed');
            const type = tile.getAttribute('data-type');
            if (type === 'high') {
                document.getElementById('high-numbers').appendChild(tile);
            } else if (type === 'low') {
                document.getElementById('low-numbers').appendChild(tile);
            }
        });

        document.getElementById('target-number').classList.add('hidden');
        document.getElementById('target-number-title').innerHTML = '';
        document.getElementById('guess-input').value = '';
        document.getElementById('guess-result').innerHTML = '';
        document.getElementById('play-again-btn').classList.add('hidden');
    }
};

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const type = tile.getAttribute('data-type');
        if (!tile.classList.contains('revealed')) {
            numbersGame.pickNumber(type, tile);
        }
    });
});

const submitGuessBtn = document.getElementById('numbers-guess-btn');
if (submitGuessBtn) {
    console.log('Submit button found');
    submitGuessBtn.addEventListener('click', () => {
        console.log('Submit button clicked');
        numbersGame.submitGuess();
    });
} else {
    console.log('Submit button not found');
}

const playAgainBtn = document.getElementById('play-again-btn');
if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
        numbersGame.resetGame();
    });
}