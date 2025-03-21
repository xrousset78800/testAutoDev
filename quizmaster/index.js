// index.js
import './styles.css';
import { updateScore } from './score.js';

let questions = [];
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    // Initialize the game state
    let currentQuestionIndex = 0;
    let score = 0;

    function displayNextQuestion() {
      const questionElement = document.getElementById('question');
      const optionsElement = document.getElementById('options');

      if (currentQuestionIndex >= questions.length) {
        return; // End of the quiz, show result
      }

      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
      optionsElement.innerHTML = '';
      for (const option of currentQuestion.options) {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionsElement.appendChild(optionElement);
      }
    }

    function handleAnswerSelection(event) {
      const selectedOptionIndex = parseInt(event.target.dataset.option);

      if (selectedOptionIndex >= 0 && selectedOptionIndex < questions[currentQuestionIndex].options.length) {
        // Check the answer
        if (questions[currentQuestionIndex].correctOptions.includes(selectedOptionIndex)) {
          score++;
          updateScore();
          showCorrectFeedback();
        } else {
          hideIncorrectFeedback();
        }

        currentQuestionIndex++;

        displayNextQuestion();

        setTimeout(() => {
          stopTimer();
          displayTime();
          displayResult(score);
        }, 1000); // Wait for 1 second before showing the result
      }
    }

    document.addEventListener('click', handleAnswerSelection);

    displayNextQuestion();
  });
