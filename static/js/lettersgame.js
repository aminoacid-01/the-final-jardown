const lettersGame = {
    selectedLetters: [],
    vowels: ['A', 'E', 'I', 'O', 'U'],
    consonants: 'BCDFGHJKLMNPQRSTVWXYZ'.split(''),
    score: 0,

    addVowel() {
        if (this.selectedLetters.length < 9) {
            const randomVowel = this.vowels[Math.floor(Math.random() * this.vowels.length)];
            this.selectedLetters.push(randomVowel);
            this.updateSelectedLetters();
        }
    },

    addConsonant() {
        if (this.selectedLetters.length < 9) {
            const randomConsonant = this.consonants[Math.floor(Math.random() * this.consonants.length)];
            this.selectedLetters.push(randomConsonant);
            this.updateSelectedLetters();
        }
    },

    updateSelectedLetters() {
        const selectedLettersDiv = document.getElementById('selected-letters');
        selectedLettersDiv.innerHTML = this.selectedLetters.map(letter => `<div class="tile revealed">${letter}</div>`).join('');
    },

    async submitGuess() {
        const guessInput = document.getElementById('guess-input').value.toUpperCase();
        const guessResultDiv = document.getElementById('guess-result');
        const isValidGuess = await this.isValidGuess(guessInput);

        if (isValidGuess) {
            this.score += guessInput.length; // Add the length of the guess to the score
            guessResultDiv.innerHTML = `Your guess "${guessInput}" is valid! Score: ${this.score}.`; // Display the score
            this.selectedLetters = []; // Clear the selected letters
            setTimeout(() => this.updateSelectedLetters(), 1000);
            this.score = 0;

        } else {
            guessResultDiv.innerHTML = `Your guess "${guessInput}" is not valid.`;
            this.selectedLetters = []; // Clear the selected letters
            setTimeout(() => this.updateSelectedLetters(), 1000);
            this.score = 0;
        }
    },

    async isValidGuess(guess) {
        const selectedLettersCopy = [...this.selectedLetters];
        for (let char of guess) {
            const index = selectedLettersCopy.indexOf(char);
            if (index === -1) {
                return false;
            }
            selectedLettersCopy.splice(index, 1);
        }

        // Check if the word is valid using a different dictionary API
        console.log(`Checking word: ${guess}`);
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess.toLowerCase()}/`);

        if (response.ok) {
            const data = await response.json();
            console.log('API response:', data);
            return data.length > 0;
        } else {
            console.error('API request failed:', response.status, response.statusText);
            return false;
        }
    }
};

const vowelBtn = document.getElementById('vowel-btn');
if (vowelBtn) {
    vowelBtn.addEventListener('click', () => lettersGame.addVowel());
}

const consonantBtn = document.getElementById('consonant-btn');
if (consonantBtn) {
    consonantBtn.addEventListener('click', () => lettersGame.addConsonant());
}

const submitGuessBtn = document.getElementById('submit-guess-btn');
if (submitGuessBtn) {
    submitGuessBtn.addEventListener('click', () => lettersGame.submitGuess());
}