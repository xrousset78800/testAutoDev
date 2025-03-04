let hello = document.getElementById('hello');
setInterval(() => {
  let x = Math.floor(Math.random() * (200 - 1)) + 1;
  hello.style.top = `${x}px`;
}, 10);
