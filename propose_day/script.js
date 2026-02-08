function showLove() {
  const love = document.getElementById("love");
  const letter = document.getElementById("letter");

  letter.innerHTML = `
    <p>
      I don’t know when it happened,<br>
      but somewhere between laughs and silence,<br>
      you became my favourite feeling.
      <br><br>
      Today, I just want to ask you one thing…
      <br><br>
      <strong>Will you be mine — today, tomorrow, and always? 💍🤍</strong>
    </p>
  `;

  love.classList.remove("hidden");

  love.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
