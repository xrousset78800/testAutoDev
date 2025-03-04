document.addEventListener("DOMContentLoaded", function() {
  let rotate = document.getElementById('hello');
  
  (function animate() {
    window.requestAnimationFrame(function() {
      rotate.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      setTimeout(animate, Math.floor(Math.random() * 1000));
    });
  })();
});