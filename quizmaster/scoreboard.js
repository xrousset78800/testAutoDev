// scoreboard.js
let score = 0;
let questionsAnswered = 0;

function updateScore(correct) {
  if (correct) {
    score++;
  }
  questionsAnswered++;
}

function getFinalResult() {
  let resultText;
  if (score >= 8) {
    resultText = "Congratulations, you got an A!";
  } else if (score >= 5) {
    resultText = "Good job, you passed with a B!";
  } else {
    resultText = "Better luck next time, you scored a C.";
  }
  return resultText;
}

export { updateScore, getFinalResult };
