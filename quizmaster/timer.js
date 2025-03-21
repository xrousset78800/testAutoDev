function startTimer() {
  let seconds = 0;
  
  function updateTimer() {
    seconds++;
    document.getElementById("timer").textContent = `Time: ${seconds} sec`;
    
    if (seconds < 60) {
      setTimeout(updateTimer, 1000);
    } else {
      clearInterval(timerInterval);
      alert(`Time's up!`);
    }
  }
  
  let timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}
