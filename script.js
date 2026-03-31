let candlesOut = 0;
const totalCandles = 3;

/* Blow candle */
function blowCandle(candle) {
  const flame = candle.querySelector(".flame");
  if (flame) {
    flame.remove();
    candlesOut++;

    if (candlesOut === totalCandles) {
      launchConfetti();
      setTimeout(() => {
        alert("🎉 Make a wish! 🎉");
      }, 500);
    }
  }
}

/* Music control */
function toggleMusic() {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 3 + 2
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animateConfetti);
}
