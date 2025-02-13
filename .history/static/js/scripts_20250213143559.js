const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let selectedLetters = [];

document.getElementById('vowel-btn').addEventListener('click', () => {
    if (selectedLetters.length < 9) {
        const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
        selectedLetters.push(randomVowel);
        updateSelectedLetters();
    }
});

document.getElementById('consonant-btn').addEventListener('click', () => {
    if (selectedLetters.length < 9) {
        const randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
        selectedLetters.push(randomConsonant);
        updateSelectedLetters();
    }
});

function updateSelectedLetters() {
    const selectedLettersDiv = document.getElementById('selected-letters');
    selectedLettersDiv.innerHTML = selectedLetters.join(' ');
}