const folderWrap = document.getElementById("folderWrap");
const openFolder = document.getElementById("openFolder");
const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("ambientAudio");

function toggleFolder() {
  const isOpen = folderWrap.classList.toggle("open");
  openBtn.textContent = isOpen ? "Close Greeting ↺" : "Open My Greeting ✦";
}

openFolder.addEventListener("click", toggleFolder);
openBtn.addEventListener("click", toggleFolder);

// A subtle interaction on the greeting itself.
document.querySelector(".folder-paper").addEventListener("click", () => {
  if (folderWrap.classList.contains("open")) {
    document.querySelector(".paper-glow").animate(
      [
        { opacity: 0.25, transform: "scale(.98)" },
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0.25, transform: "scale(.98)" }
      ],
      { duration: 900, easing: "ease-out" }
    );
  }
});

// Optional ambient audio support.
// If you later add ambient.mp3 to this folder, this button will work automatically.
musicBtn.addEventListener("click", async () => {
  if (!audio.querySelector("source")) {
    musicBtn.textContent = "Add ambient.mp3 to enable ♪";
    setTimeout(() => musicBtn.textContent = "Ambient Sound: Off", 2200);
    return;
  }

  if (audio.paused) {
    await audio.play();
    musicBtn.textContent = "Ambient Sound: On ♪";
  } else {
    audio.pause();
    musicBtn.textContent = "Ambient Sound: Off";
  }
});

// Rasengan-style cursor tracking.
const orb = document.querySelector(".cursor-orb");
const trail = document.querySelector(".cursor-trail");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailX = mouseX;
let trailY = mouseY;

window.addEventListener("pointermove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  orb.style.left = `${mouseX}px`;
  orb.style.top = `${mouseY}px`;
});

function animateTrail() {
  trailX += (mouseX - trailX) * 0.14;
  trailY += (mouseY - trailY) * 0.14;
  trail.style.left = `${trailX}px`;
  trail.style.top = `${trailY}px`;
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Tiny sparkle burst when the user opens the card.
function sparkleBurst() {
  for (let i = 0; i < 14; i++) {
    const dot = document.createElement("i");
    dot.className = "spark";
    dot.style.left = "50%";
    dot.style.top = "55%";
    dot.style.setProperty("--x", `${(Math.random() - 0.5) * 420}px`);
    dot.style.setProperty("--y", `${(Math.random() - 0.5) * 300}px`);
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 900);
  }
}

const sparkleStyle = document.createElement("style");
sparkleStyle.textContent = `
  .spark {
    position: fixed;
    z-index: 80;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    pointer-events: none;
    background: #fff3c7;
    box-shadow: 0 0 14px #fff;
    animation: sparkle-fly .9s ease-out forwards;
  }
  @keyframes sparkle-fly {
    to {
      transform: translate(var(--x), var(--y)) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(sparkleStyle);

openFolder.addEventListener("click", sparkleBurst);
