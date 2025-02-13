const lettersGame = {
    selectedLetters: [],
    vowels: ['A', 'E', 'I', 'O', 'U'],
    consonants: 'BCDFGHJKLMNPQRSTVWXYZ'.split(''),

    addVowel() {
        if (this.selectedLetters.length < 9) {
            const randomVowel = this.vowels[Math.floor(Math.random() * this.vowels.length)];
            this.selectedLetters.push(randomVowel);
            this.updateSelectedLetters();
            console.log(`Added vowel: ${randomVowel}`);
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
        console.log(`Selected letters: ${this.selectedLetters.join(' ')}`);
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