document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let x = 50;
    let y = 50;
    let radius = 20;
    let dx = 5;
    let dy = 5;

    function drawCircle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function updatePosition() {
        x += dx;
        y += dy;

        if (x + radius > canvas.width || x - radius < 0) {
            dx = -dx;
        }

        if (y + radius > canvas.height || y - radius < 0) {
            dy = -dy;
        }
    }

    function animate() {
        drawCircle();
        updatePosition();
        requestAnimationFrame(animate);
    }

    animate();
});
