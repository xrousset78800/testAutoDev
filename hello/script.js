// Get references to HTML elements
const h1 = document.getElementById('hello-world');
let i = 0;

setInterval(() => {
    // Update the text content of <h1> with 'Hello World' in uppercase
    if (i % 2 === 0) {
        h1.textContent = `HELLO WORLD`;
    } else {
        h1.textContent = `WORLD HELLO`;
    }
    
    // Increment the timer variable by 1 each time the function is called
    i++;
}, 1000);