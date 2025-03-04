Here is the `script.js` file:
```
function animateHello() {
  let hello = document.getElementById('hello');
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      hello.style.transform = `translateY(${i * 20}px)`;
      requestAnimationFrame(() => {
        if (i === 4) {
          setTimeout(animateHello, 1000);
        } else {
          hello.style.transform = 'none';
        }
      });
    }, i * 200 + 500);
}

document.addEventListener('DOMContentLoaded', animateHello);
```
Let me know if this meets your requirements!