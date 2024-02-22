document.addEventListener('keyup', handleKeyPress)




function continueGame() {

    const alphabet = getRandomAlphabet();
    document.getElementById('current-alphabet').innerText = alphabet;
    highlightElementById(alphabet.toLowerCase());
}


function play() {
    hideElementById('home');
    showElementById('playground');
    continueGame();
}

function playAgain() {
    hideElementById('score');
    showElementById('playground');
}

function gameOver() {
    hideElementById('playground');
    showElementById('score');
    document.getElementById('score-num').innerText = document.getElementById('score-value').innerText;
    document.getElementById('score-value').innerText = 0;
    document.getElementById('lives-value').innerText = 3;
    const lastKey = document.getElementById('current-alphabet').innerText.toLowerCase();
    removeHighlight(lastKey);
}

function handleKeyPress(event) {
    const keyPressed = event.key;
    const keyDisplayed = document.getElementById('current-alphabet').innerText.toLowerCase();

    if (keyPressed === 'Escape') {
        gameOver();
        return;
    }

    if (keyPressed === keyDisplayed) {
        removeHighlight(keyDisplayed);
        updateScore();
        continueGame();
    } else {
        updateLives();
        if (parseInt(document.getElementById('lives-value').innerText) <= 0) {
            gameOver();
        }
    }
}
