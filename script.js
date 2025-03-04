Here is the `script.js` file:

```javascript
function animateHello() {
  const hello = document.getElementById("hello");
  
  function scaleUp() {
    if (parseInt(hello.style.fontSize) < 50) {
      hello.style.fontSize = parseInt(hello.style.fontSize) + 1;
      requestAnimationFrame(scaleUp);
    }
  }

  setTimeout(() => {
    requestAnimationFrame(scaleUp);
  }, 500);

}

animateHello();
```

This JavaScript file adds an animation effect to the "hello world" text, gradually increasing its font size.