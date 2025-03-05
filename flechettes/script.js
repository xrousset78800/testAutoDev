let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", function(event){
    let x = event.clientX;
    let y = event.clientY;

    // Check if the player hit a dart target
    for(let i=0; i<20; i++){
        let targetX = Math.floor(Math.random() * (350 - 50)) + 50;
        let targetY = Math.floor(Math.random() * (500 - 100)) + 100;

        ctx.beginPath();
        ctx.arc(targetX, targetY, 10, 0, 2*Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();

        if((x > targetX-15 && x < targetX+15) &&
           (y > targetY-15 && y < targetY+15)){
            alert("You hit a dart target!");
        }
    }
});

// Draw the game board
ctx.beginPath();
ctx.rect(50, 100, 350, 400);
ctx.fillStyle = "white";
ctx.fill();

setInterval(() => {
    // Update the canvas to show the dart targets moving around randomly
}, 5000);