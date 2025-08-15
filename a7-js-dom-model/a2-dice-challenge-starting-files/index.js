function rollDice() {
    const images = [];

  for (let i = 1; i <= 6; i++) {
    images.push("./images/dice" + i + ".png");
  }

  const r1 = Math.floor((Math.random() * 6));
  const r2 = Math.floor((Math.random() * 6));

  document.querySelector(".img1").setAttribute("src", images[r1]);
  document.querySelector(".img2").setAttribute("src", images[r2]);

  const h1 = document.querySelector("h1");
  if(r1 > r2) {
    h1.textContent = "🚩Player 1 Wins!";
  } else if (r2 > r1) {
    h1.textContent = "Player 2 Wins! 🚩";
  } else {
    h1.textContent = "Draw !!";
  }

}


rollDice();

document.querySelector(".img1").addEventListener("click", () => {
    rollDice();
});

document.querySelector(".img2").addEventListener("click", () => {
    rollDice();
});