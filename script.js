const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
const musicNotice = document.getElementById("musicNotice");

music.volume = 0.35;

function startMusic() {
  music
    .play()
    .then(function () {
      musicButton.innerHTML = "🎵 Music: ON";
      musicNotice.classList.add("hide");
    })
    .catch(function () {
      musicNotice.classList.remove("hide");
    });
}

window.addEventListener("load", function () {
  startMusic();
});

document.addEventListener(
  "click",
  function () {
    if (music.paused) {
      startMusic();
    }
  },
  { once: true },
);

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicButton.innerHTML = "🎵 Music: ON";
    musicNotice.classList.add("hide");
  } else {
    music.pause();
    musicButton.innerHTML = "🔇 Music: OFF";
  }
}

function openMessage(id) {
  const box = document.getElementById(id);

  if (box.classList.contains("show")) {
    box.classList.remove("show");
    return;
  }

  box.classList.add("show");

  createHearts();

  box.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");

    heart.className = "heart-float";

    const symbols = ["❤️", "💗", "💕", "💖", "🎀", "🌸"];

    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = 15 + Math.random() * 25 + "px";

    heart.style.animationDuration = 3 + Math.random() * 2 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 5000);
  }
}

setTimeout(function () {
  createHearts();
}, 1200);
