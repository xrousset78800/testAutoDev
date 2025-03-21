// scoreboard.js
let score = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;

function updateScore() {
    const scoreboardElement = document.getElementById('scoreboard');
    scoreboardElement.innerText = `Score: ${score} | Correct answers: ${correctAnswersCount} | Incorrect answers: ${incorrectAnswersCount}`;
}

function displayResult() {
    const resultElement = document.getElementById('result');
    if (correctAnswersCount > incorrectAnswersCount) {
        resultElement.innerHTML += '<p>Well done!</p>';
    } else if (incorrectAnswersCount > correctAnswersCount) {
        resultElement.innerHTML += '<p>Better luck next time.</p>';
    }
}

function resetScore() {
    score = 0;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
}
