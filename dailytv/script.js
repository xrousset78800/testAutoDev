// Import the API endpoint from api.js
const { getDailyProgram } = require('./api');

// Get the program list element
const programListElement = document.getElementById('program-list');

// Call the API to retrieve daily TV programs
getDailyProgram().then(programData => {
  // Clear any existing content in the program list
  programListElement.innerHTML = '';

  // Loop through each show and add it to the program list
  programData.forEach(show => {
    const li = document.createElement('li');
    li.textContent = `${show.timeSlot} - ${show.showTitle}`;
    programListElement.appendChild(li);
  });
});