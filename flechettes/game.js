// .game.js
let score = 0;
let targetScore = 10;

function startGame() {
    document.getElementById("dartboard-title").innerText = "Dart Game";
}

function hitTarget() {
    score++;
    document.getElementById("score").innerText = `Score: ${score}`;
    
    if (score >= targetScore) {
        alert(`Félicitations ! Vous avez atteint le score de ${targetScore} points.`);
        location.href = "./dartboard.html"; // Rediriger vers la page dartboard
    }
}

document.addEventListener("DOMContentLoaded", startGame);

// Get the score element and set its initial value
let scoreElement = document.getElementById("score");
scoreElement.innerText = `Score: 0`;