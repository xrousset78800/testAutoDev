// timer.js
let startTime;
let endTime;

function startTimer() {
  startTime = new Date().getTime();
}

function stopTimer() {
  endTime = new Date().getTime();
  let elapsedSeconds = (endTime - startTime) / 1000;
  return elapsedSeconds;
}

export { startTimer, stopTimer };
