// feedback.js
function showCorrectFeedback() {
    const correctFeedbackElement = document.getElementById('correct-feedback');
    correctFeedbackElement.style.display = 'block';
}

function hideCorrectFeedback() {
    const correctFeedbackElement = document.getElementById('correct-feedback');
    correctFeedbackElement.style.display = 'none';
}

function showIncorrectFeedback() {
    const incorrectFeedbackElement = document.getElementById('incorrect-feedback');
    incorrectFeedbackElement.style.display = 'block';
}

function hideIncorrectFeedback() {
    const incorrectFeedbackElement = document.getElementById('incorrect-feedback');
    incorrectFeedbackElement.style.display = 'none';
}
