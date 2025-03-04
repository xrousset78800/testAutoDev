Here is the `script.js` file:

```javascript
// Selecting elements
const helloWorldText = document.querySelector('.hello-world-text');
const animatingCircle = document.querySelector('.animating-circle');

// Animation function
function animate() {
  // Animate the circle
  animatingCircle.classList.add('animate');
  
  setTimeout(() => {
    animatingCircle.classList.remove('animate');
  }, 2000);
}

// Call animation on page load
window.addEventListener('load', () => {
  animate();
});

// Update text content
setInterval(() => {
  helloWorldText.textContent = `Hello, World! ${Date.now()}`;
}, 10000);

// Add event listener for circle hover effect
animatingCircle.addEventListener('mouseover', () => {
  animatingCircle.style.background-color = 'lightblue';
});
```