document.getElementById("envelope").addEventListener("click", function () {
  this.classList.add("open");
  startPetals();
});

// 🌸 Анімація пелюсток
function startPetals() {
  const canvas = document.getElementById("petals");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let petals = [];
  for (let i = 0; i < 30; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 2 - 1,
    });
  }

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((p) => {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 105, 180, 0.8)";
      ctx.ellipse(p.x, p.y, p.size, p.size / 2, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      p.y += p.speed;
      p.x += p.drift;
      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(drawPetals);
  }

  drawPetals();
}
