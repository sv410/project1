// JavaScript logic for Word Guessing Game
const words = ['apple', 'banana', 'orange', 'grape', 'watermelon','mango','kiwi','guava','fig','dragonfruit','strawberry']; // List of words to be guessed

let currentWord; // Variable to store the current word being guessed
let remainingAttempts; // Variable to store the remaining attempts

function initializeGame() {
    remainingAttempts = 5; // Set initial attempts
    currentWord = words[Math.floor(Math.random() * words.length)]; // Pick a random word from the list
    displayWord(); // Display dashes representing the word to be guessed
    displayHint(); // Display a hint for the word
    displayLetterOptions(); // Display letter options for the player
}

function displayWord() {
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.innerHTML = currentWord.replace(/./g, '_ '); // Display dashes for each letter in the word
}

function displayHint() {
    const hintSpan = document.getElementById('hint-text');
    hintSpan.innerText = "It's a fruit."; // Example hint
}

function displayLetterOptions() {
    const letterOptionsDiv = document.getElementById('letter-options');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    letters.split('').forEach(letter => {
        const letterButton = document.createElement('button');
        letterButton.innerText = letter;
        letterButton.classList.add('letter');
        letterButton.addEventListener('click', () => {
            guessLetter(letter);
            letterButton.disabled = true; // Disable the button after it's clicked
        });
        letterOptionsDiv.appendChild(letterButton);
    });
}

function guessLetter(letter) {
    if (currentWord.includes(letter)) {
        updateWordDisplay(letter);
    } else {
        updateRemainingAttempts();
    }
}

function updateWordDisplay(letter) {
    const wordDisplay = document.getElementById('word-display');
    const currentWordArray = wordDisplay.innerText.split(' ');
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            currentWordArray[i] = letter;
        }
    }
    wordDisplay.innerText = currentWordArray.join(' ');
    if (!currentWordArray.includes('_')) {
        // Player has guessed the word correctly
        alert('Congratulations! You guessed the word.');
        initializeGame();
    }
}

function updateRemainingAttempts() {
    remainingAttempts--;
    if (remainingAttempts === 0) {
        // Player has run out of attempts
        alert('Game over. You ran out of attempts.');
        initializeGame();
    }
}

document.getElementById('reset-button').addEventListener('click', initializeGame);

initializeGame(); // Start the game
