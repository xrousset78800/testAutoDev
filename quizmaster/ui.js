// ui.js
let questionElement;
let resultElement;

function displayQuestion(question) {
  if (questionElement) {
    questionElement.remove();
  }
  let html = `
    <h2>${question.question}</h2>
    <ul>
      ${question.answers.map((answer, index) => `<li><button data-answer-index="${index}">${answer}</button></li>`).join('')}
    </ul>
  `;
  questionElement = $(html);
  $('body').append(questionElement);
}

function displayResult(resultText) {
  if (resultElement) {
    resultElement.remove();
  }
  let html = `
    <h2>${resultText}</h2>
    <button id="play-again">Play Again</button>
  `;
  resultElement = $(html);
  $('body').append(resultElement);

  $('#play-again').on('click', () => {
    // Rejouer le quiz
  });
}

export { displayQuestion, displayResult };
