document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("wavesCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.2;

    const waveColors = ['#000080', '#ff8c00'];

    function drawWaves() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < waveColors.length; i++) {
            const waveHeight = 20 + Math.sin(Date.now() * 0.002 + i * Math.PI) * 15;
            ctx.fillStyle = waveColors[i];
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            for (let x = 0; x < canvas.width; x += 10) {
                const y = Math.sin(x * 0.02 + Date.now() * 0.002 + i * Math.PI) * waveHeight + canvas.height - 20;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.closePath();
            ctx.fill();
        }
    }

    function animate() {
        drawWaves();
        requestAnimationFrame(animate);
    }

    animate();
});
