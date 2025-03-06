// Import the program.json file as a JSON object
const programData = require('./program.json');

// Define an API endpoint to retrieve daily TV program data
function getDailyProgram() {
  return new Promise((resolve, reject) => {
    // Simulate API request (replace with your actual API call)
    setTimeout(() => {
      resolve(programData);
    }, 1000); // Replace with the actual time it takes for the API to respond
  });
}

// Export the getDailyProgram function
module.exports = {getDailyProgram};