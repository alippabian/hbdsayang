/* 🎂 Candle logic */
let blown = 0;
function blow(el) {
  const flame = el.querySelector(".flame");
  if (flame) {
    flame.remove();
    blown++;
  }

  if (blown === 3) {
    launchConfetti();
    setTimeout(() => alert("✨ Your wish is on its way..."), 500);
  }
}

/* 🏮 Generate MANY lanterns */
const container = document.querySelector(".lantern-container");

for (let i = 0; i < 25; i++) {
  let lantern = document.createElement("img");
  lantern.src = "https://pngimg.com/uploads/lantern/lantern_PNG42.png";
  lantern.classList.add("lantern");

  lantern.style.left = Math.random() * 100 + "vw";
  lantern.style.animationDuration = (8 + Math.random() * 10) + "s";
  lantern.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(lantern);
}

/* 🎉 Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 4 + 2
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
}
