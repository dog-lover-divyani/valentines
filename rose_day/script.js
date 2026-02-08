function showLove() {
  const music = document.getElementById("bgMusic");

  music.volume = 0.4;
  music.loop = true;
  music.play().catch(() => {});

  const section = document.getElementById("loveSection");
  section.classList.remove("hidden");

  // 🎯 SCROLL JUST BELOW THE BUTTON
  const btn = document.querySelector("button");
  btn.scrollIntoView({
    behavior: "smooth",
    block: "end"
  });

  index = 0;
  document.getElementById("typewriter").innerHTML = "";
  typeWriter();
}




function bloomRose() {
  document.querySelector(".rose").style.transform = "scale(1.3)";
}

/* 🌸 Falling Rose Petals */
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (Math.random() * 3 + 4) + "s";
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 7000);
}

setInterval(createPetal, 400);

/* 💌 Typewriter Love Letter */
const text = `My love,

If I could give you a rose for every time you made me smile, the entire world would be blooming in red by now.
You are not just a part of my days, you are the calm in my chaos, the warmth in my silence, the reason my heart feels full even on the hardest days.

Loving you feels natural, effortless, like breathing. In you, I found comfort, laughter, patience, and a kind of love that feels steady and safe. You make ordinary moments feel special just by being there, and somehow, even distance or time feels smaller when I think of you.

This rose is a reminder of everything I can’t say in one sentence — of how deeply I care, how endlessly I choose you, and how grateful I am for your presence in my life.

Happy Rose Day, my favorite person.
Always yours. 🌹❤️`;

let index = 0;
const speed = 40;

function typeWriter() {
  if (index < text.length) {
    const target = document.getElementById("typewriter");
    target.innerHTML += text.charAt(index);
    index++;

    setTimeout(typeWriter, speed);
  }
}




