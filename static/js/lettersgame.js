const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let selectedLetters = [];

document.getElementById('vowel-btn').addEventListener('click', async () => {
    if (selectedLetters.length < 9) {
        const response = await fetch('/random-vowel');
        const randomVowel = await response.json();
        selectedLetters.push(randomVowel);
        updateSelectedLetters();
    }
});

document.getElementById('consonant-btn').addEventListener('click', async () => {
    if (selectedLetters.length < 9) {
        const response = await fetch('/random-consonant');
        const randomConsonant = await response.json();
        selectedLetters.push(randomConsonant);
        updateSelectedLetters();
    }
});

function updateSelectedLetters() {
    const selectedLettersDiv = document.getElementById('selected-letters');
    selectedLettersDiv.innerHTML = selectedLetters.join(' ');
}