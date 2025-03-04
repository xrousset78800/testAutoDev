// Get the container element
const helloContainer = document.getElementById("hello-container");

// Function to animate the text
function animateText() {
  // Set initial values
  let i = 0;
  
  // Animate the text every second
  setInterval(() => {
    if (i < "Hello World".length) {
      const currentText = `Hello ${String.fromCharCode(32)}.`;
      helloContainer.textContent = currentText.substring(0, i + 1);
      i++;
    } else {
      clearInterval();
    }
  }, 1000);
}

// Initialize the animation
animateText();
