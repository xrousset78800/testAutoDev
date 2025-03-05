// Define constants for the game board dimensions
const BOARD_WIDTH = 300;
const BOARD_HEIGHT = 400;

// Define an object to store the dartboard layout
let dartboardLayout = {
  sections: [
    { x: 0, y: 0, width: 100, height: 200 }, // Top section (single)
    { x: 100, y: 0, width: 50, height: 150 }, // Middle left section
    { x: 150, y: 0, width: 50, height: 150 }, // Middle right section
    { x: 200, y: 0, width: 100, height: 200 } // Bottom section (single)
  ]
};

// Define a function to handle mouse clicks on the dartboard
function handleClick(event) {
  const target = event.target;
  if (!target.classList.contains('dart')) return;

  // Get the section coordinates from the data attribute
  const x = parseInt(target.dataset.x);
  const y = parseInt(target.dataset.y);

  // Check which section was clicked and update score accordingly
  for (let i = 0; i < dartboardLayout.sections.length; i++) {
    if (
      x >= dartboardLayout.sections[i].x &&
      x <= dartboardLayout.sections[i].x + dartboardLayout.sections[i].width &&
      y >= dartboardLayout.sections[i].y &&
      y <= dartboardLayout.sections[i].y + dartboardLayout.sections[i].height
    ) {
      // Update score logic goes here (e.g., increment a score variable)
      console.log(`Score updated for section ${i}`);
      break;
    }
  }
}

// Add event listener to the game board container
document.getElementById('game-board').addEventListener('click', handleClick);

// Initialize the dartboard layout and render it in HTML
function init() {
  const gameBoard = document.getElementById('game-board');
  let html = '';
  for (let i = 0; i < dartboardLayout.sections.length; i++) {
    html += `<div class="dart" data-x="${dartboardLayout.sections[i].x}" data-y="${dartboardLayout.sections[i].y}"></div>`;
  }
  gameBoard.innerHTML = html;
}

init();