// Define a score variable to keep track of the player's score
let score = 0;

// Define an object to store the scoring rules for each section of the dartboard
const scoringRules = {
  'single': 1,
  'double': 2,
  'triple': 3,
};

// Function to update the scoreboard with a new throw result
function updateScore(throwResult) {
  if (throwResult === 'bullseye') {
    score += scoringRules['bullseye'];
  } else if (throwResult === 'single' || throwResult === 'double' || throwResult === 'triple') {
    score += scoringRules[throwResult];
  }
}

// Function to reset the scoreboard for a new game
function resetScore() {
  score = 0;
}

// Export the updateScore and resetScore functions as an object
export { updateScore, resetScore };