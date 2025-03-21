// Get the quiz questions from the JSON file
fetch('quiz.json')
  .then(response => response.json())
  .then(questions => {
    // Initialize score and current question index
    let score = 0;
    let currentQuestionIndex = 0;

    // Function to display a new question
    function showNextQuestion() {
      const questionContainer = document.getElementById('question-container');
      const questionText = questions[currentQuestionIndex].question;
      const answerButtons = questions[currentQuestionIndex].answers.map(answer => `<button>${answer.text}</button>`).join('');

      questionContainer.innerHTML = `
        <h2>${questionText}</h2>
        <ul class="answer-buttons">${answerButtons}</ul>
      `;

      // Add event listener to each answer button
      const buttons = document.querySelectorAll('.answer-buttons button');
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          if (questions[currentQuestionIndex].answers[index].correct) {
            score++;
            alert(`Correct! Your current score is ${score}.`);
          } else {
            alert(`Incorrect. The correct answer was ${questions[currentQuestionIndex].answers.find(answer => answer.correct).text}.`);
          }
          // Show the next question
          showNextQuestion();
        });
      });

      // Display the chronometer and result container
      const chronometer = document.getElementById('chronometer');
      let timerInterval = setInterval(() => {
        const minutes = Math.floor((Date.now() - questions[0].startTime) / 60000);
        chronometer.textContent = `${minutes} min`;
      }, 1000);

      // Display the result container
      const resultContainer = document.getElementById('result-container');
      resultContainer.innerHTML = `
        <h2>Result: ${score}/${questions.length}</h2>
        <p>${getCommentary(score)}</p>
      `;

      function getCommentary(score) {
        if (score >= 8) return 'Congratulations, you are a quiz master!';
        else if (score > 4) return 'Good job! You got some correct answers.';
        else return 'Don\'t worry, it\'s just the beginning. Keep trying!';
      }
    }

    // Start the quiz
    questions.forEach(question => {
      question.startTime = Date.now();
    });
    showNextQuestion();

    // Function to restart the quiz
    document.getElementById('restart-button').addEventListener('click', () => {
      score = 0;
      currentQuestionIndex = 0;
      chronometer.textContent = '00 min';
      resultContainer.innerHTML = '';
      showNextQuestion();
    });
  });

// Initialize the DOM elements
const questionContainer = document.createElement('div');
questionContainer.id = 'question-container';

const chronometer = document.createElement('span');
chronometer.id = 'chronometer';

const resultContainer = document.createElement('div');
resultContainer.id = 'result-container';

const restartButton = document.createElement('button');
restartButton.id = 'restart-button';
restartButton.textContent = 'Restart Quiz';

document.body.appendChild(questionContainer);
questionContainer.appendChild(chronometer);
questionContainer.appendChild(resultContainer);
resultContainer.appendChild(restartButton);
