const numbersGame = {
    selectedNumbers: [],
    highNumbers: [25, 50, 75, 100],
    lowNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    targetNumber: null,
    highScore: 0,

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
        this.calculateHighScore();
        this.saveResult();
    },

    calculateHighScore() {
        // Calculate the high score based on the selected numbers and target number
        // This is a placeholder calculation, replace with your actual logic
        this.highScore = this.selectedNumbers.reduce((a, b) => a + b, 0);
    },

    saveResult() {
        fetch('/save-numbers-game-result/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                selected_numbers: this.selectedNumbers,
                target_number: this.targetNumber,
                high_score: this.highScore
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Result saved:', data);
        })
        .catch(error => {
            console.error('Error saving result:', error);
        });
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

// Helper function to get CSRF token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}