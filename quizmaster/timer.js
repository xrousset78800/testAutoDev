// timer.js
let startTime = 0;
let endTime = 0;
let timeElapsed = 0;

function startTimer() {
    startTime = new Date().getTime();
}

function stopTimer() {
    endTime = new Date().getTime();
    timeElapsed = (endTime - startTime) / 1000; // convert to seconds
}

function displayTime() {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Time elapsed: ${timeElapsed.toFixed(2)} seconds`;
}
