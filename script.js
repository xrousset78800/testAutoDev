```
let hello = document.getElementById('hello');

setTimeout(() => {
  hello.style.opacity = 0;
  setTimeout(() => {
    hello.style.opacity = 1;
  }, 100);
}, 500);
```