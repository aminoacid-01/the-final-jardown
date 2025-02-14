const lettersGame = {
    selectedLetters: [],
    vowels: ['A', 'E', 'I', 'O', 'U'],
    consonants: 'BCDFGHJKLMNPQRSTVWXYZ'.split(''),

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
            console.log(`Added consonant: ${randomConsonant}`);
        }
    },

    updateSelectedLetters() {
        const selectedLettersDiv = document.getElementById('selected-letters');
        selectedLettersDiv.innerHTML = this.selectedLetters.join(' ');
    },

    submitGuess() {
        const guessInput = document.getElementById('guess-input').value.toUpperCase();
        const guessResultDiv = document.getElementById('guess-result');
        const isValidGuess = this.isValidGuess(guessInput);

        if (isValidGuess) {
            guessResultDiv.innerHTML = `Your guess "${guessInput}" is valid!`;
        } else {
            guessResultDiv.innerHTML = `Your guess "${guessInput}" is not valid.`;
        }
    },

    isValidGuess(guess) {
        const selectedLettersCopy = [...this.selectedLetters];
        for (let char of guess) {
            const index = selectedLettersCopy.indexOf(char);
            if (index === -1) {
                return false;
            }
            selectedLettersCopy.splice(index, 1);
        }
        return true;
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