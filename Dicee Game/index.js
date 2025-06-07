function rollDice() {
  const image1 = document.querySelector(".img1");
  const image2 = document.querySelector(".img2");

  // Add animation class
  image1.classList.add("dice-rolling");
  image2.classList.add("dice-rolling");

  // Wait for animation to play (500ms), then change image
  setTimeout(() => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    image1.setAttribute("src", `images/dice${randomNumber1}.png`);
    image2.setAttribute("src", `images/dice${randomNumber2}.png`);

    // Remove animation class so it can play again next time
    image1.classList.remove("dice-rolling");
    image2.classList.remove("dice-rolling");

    // Update result
    const heading = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      heading.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      heading.textContent = "Player 2 Wins! 🚩";
    } else {
      heading.textContent = "Draw!";
    }

  }, 150); // Match the animation duration
}
document.getElementById("roll-button").addEventListener("click", rollDice);
