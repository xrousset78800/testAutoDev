// game.js
let questions = [];
const correctAnswersCount = 0;
const incorrectAnswersCount = 0;

function loadQuestions() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'questions.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            questions = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
}

loadQuestions();

let currentQuestionIndex = 0;
let score = 0;

function displayCurrentQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestionIndex].question;
    
    for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
        const answerButton = document.createElement('button');
        answerButton.textContent = questions[currentQuestionIndex].answers[i];
        answerButton.addEventListener('click', checkAnswer);
        questionElement.appendChild(answerButton);
    }
}

function checkAnswer(event) {
    if (event.target.textContent === questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correctAnswerIndex]) {
        score++;
        correctAnswersCount++;
    } else {
        incorrectAnswersCount++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions.length) {
        displayResult();
    } else {
        displayCurrentQuestion();
    }
}

function displayResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `You scored ${score} out of ${questions.length}.`;
    
    if (correctAnswersCount > incorrectAnswersCount) {
        resultElement.innerHTML += '<p>Well done!</p>';
    } else if (incorrectAnswersCount > correctAnswersCount) {
        resultElement.innerHTML += '<p>Better luck next time.</p>';
    }
}

displayCurrentQuestion();
