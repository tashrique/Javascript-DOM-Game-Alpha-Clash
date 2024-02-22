function hideElementById(id) {
    (document.getElementById(id)).classList.add('hidden');
}


function showElementById(id) {
    (document.getElementById(id)).classList.remove('hidden');
}


function getRandomAlphabet() {
    var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}

function highlightElementById(id) {
    (document.getElementById(id)).classList.add('bg-yellow-300');
}

function removeHighlight(id) {
    (document.getElementById(id)).classList.remove('bg-yellow-300');
}

function updateScore() {
    var score = parseInt(document.getElementById('score-value').innerText);
    score++;
    document.getElementById('score-value').innerText = score;
}

function updateLives() {
    var lives = parseInt(document.getElementById('lives-value').innerText);
    lives--;
    document.getElementById('lives-value').innerText = lives;
}