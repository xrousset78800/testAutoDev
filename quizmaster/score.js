// score.js
let currentScore = 0;

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `Score: ${currentScore}`;
}

export { updateScore };
