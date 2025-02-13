const lettersGame = {
    selectedLetters: [],
    vowels: ['A', 'E', 'I', 'O', 'U'],
    consonants: 'BCDFGHJKLMNPQRSTVWXYZ'.split(''),
    
const vowelBtn = document.getElementById('vowel-btn');
if (vowelBtn) {
    vowelBtn.addEventListener('click', () => {
        if (selectedLetters.length < 9) {
            const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
            selectedLetters.push(randomVowel);
            updateSelectedLetters();
        }
    });
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
        selectedLettersDiv.innerHTML = this.selectedLetters.join(' ');
const vowelBtn = document.getElementById('vowel-btn');
if (vowelBtn) {
    vowelBtn.addEventListener('click', () => lettersGame.addVowel());
}

const consonantBtn = document.getElementById('consonant-btn');
if (consonantBtn) {
    consonantBtn.addEventListener('click', () => lettersGame.addConsonant());
}

document.getElementById('vowel-btn').addEventListener('click', () => lettersGame.addVowel());
document.getElementById('consonant-btn').addEventListener('click', () => lettersGame.addConsonant());