// Get the questions from the JSON file
fetch('questions.json')
  .then(response => response.json())
  .then(questions => {
    // Initialize score and current question index
    let score = 0;
    let currentQuestionIndex = 0;

    // Function to display a question and its options
    function displayQuestion() {
      const questionText = document.getElementById('question-text');
      const answerOptions = document.getElementById('answer-options');

      if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        answerOptions.innerHTML = '';
        for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
          const option = document.createElement('div');
          option.className = 'answer-option';
          option.textContent = questions[currentQuestionIndex].answers[i];
          if (i === questions[currentQuestionIndex].correctAnswerIndex) {
            option.classList.add('correct-answer');
          } else {
            option.classList.add('incorrect-answer');
          }
          answerOptions.appendChild(option);
        }

        // Add event listener for answers
        const options = document.querySelectorAll('.answer-option');
        options.forEach((option, index) => {
          option.addEventListener('click', () => {
            if (index === questions[currentQuestionIndex].correctAnswerIndex) {
              score++;
              alert(`Correct! Your current score is ${score}.`);
            } else {
              alert(`Incorrect. The correct answer was ${questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correctAnswerIndex]}.`);
            }

            // Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex >= questions.length) {
              displayResult();
            } else {
              displayQuestion();
            }
          });
        });

      } else {
        displayResult();
      }
    }

    function displayResult() {
      const resultText = document.getElementById('result-text');
      let message;

      if (score > 0.5 * questions.length) {
        message = 'Congratulations! You got a high score.';
      } else if (score < 0.2 * questions.length) {
        message = 'Sorry, you didn\'t do well this time. Better luck next time!';
      } else {
        message = `You scored ${Math.round(score / questions.length * 100)}%. Not bad!`;
      }

      resultText.textContent = message;
    }

    displayQuestion();
  });

// Add event listener for replay button
document.getElementById('replay-button').addEventListener('click', () => {
  score = 0;
  currentQuestionIndex = 0;
  displayQuestion();
});
