const chocolateText = `They say chocolate makes everything better,
but honestly — you already do that for me.

Still, today feels special.
A little sweeter.
A little warmer.

So consider this chocolate a tiny reminder
of how much you mean to me,
how often you make me smile,
and how effortlessly you make my days softer.

If love had a flavour,
it would taste like this moment —
simple, sweet,
and meant just for you. 🤎🍫`;

let index = 0;
const speed = 35;

function startChocolate() {
  const music = document.getElementById("bgMusic");
  const section = document.getElementById("chocoSection");
  const wrapper = document.getElementById("wrapper");
  const bar = document.getElementById("chocoBar");
  const target = document.getElementById("typewriter");

  music.volume = 0.5;
  music.loop = true;
  music.play().catch(() => {});

  section.classList.remove("hidden");
  bar.classList.remove("hidden");

  // RIP wrapper
  setTimeout(() => {
    wrapper.classList.add("rip");
  }, 600);

  // start typing AFTER rip
  setTimeout(() => {
    index = 0;
    target.innerHTML = "";
    typeWriter();
    startChocos();
  }, 1400);
}

function typeWriter() {
  const target = document.getElementById("typewriter");
  if (index < chocolateText.length) {
    target.innerHTML += chocolateText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

/* FLOATING CHOCOS */
function createChoco() {
  const choco = document.createElement("div");
  choco.classList.add("choco-fall");
  choco.innerText = ["🍫", "🤎", "🍩"][Math.floor(Math.random() * 3)];
  choco.style.left = Math.random() * window.innerWidth + "px";
  choco.style.animationDuration = Math.random() * 4 + 6 + "s";
  document.body.appendChild(choco);
  setTimeout(() => choco.remove(), 9000);
}

let chocoInterval;
function startChocos() {
  if (!chocoInterval) {
    chocoInterval = setInterval(createChoco, 700);
  }
}
