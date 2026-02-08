const proposalText = `I don’t know when it happened,
but somewhere between laughs and silence,
you became my favourite feeling.

Every little moment with you feels softer,
every thought of you feels warmer,
and every future I imagine feels right — because you’re in it.

So today, with a heart full of hope
and hands slightly trembling,
I just want to ask you one simple thing…

Will you be mine —
today, tomorrow,
and all the days that come after? 💍🤍`;

let index = 0;
const speed = 40; // typing speed (smaller = faster)

function showLove() {
  const love = document.getElementById("love");
  const letter = document.getElementById("letter");

  // reset in case of reload / double click
  index = 0;
  letter.innerHTML = "";

  love.classList.remove("hidden");

  love.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  typeWriter();

  startHearts();

  startMusic();

}

function typeWriter() {
  const letter = document.getElementById("letter");

  if (index < proposalText.length) {
    letter.innerHTML += proposalText.charAt(index);
    index++;

    let delay = speed;

    // ⏸ pause before the big question
    if (proposalText.substring(index - 5, index).includes("thing")) {
      delay = 1200;
    }

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

    setTimeout(typeWriter, delay);
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["💗", "🤍", "💕"];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  heart.style.animationDuration = Math.random() * 4 + 6 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// start hearts ONLY after clicking button
let heartInterval;

function startHearts() {
  if (!heartInterval) {
    heartInterval = setInterval(createHeart, 600);
  }
}

// 🎵 Play background music (existing audio tag)
function startMusic() {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) {
    music.volume = 0.4; // adjust if needed
    music.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }
}