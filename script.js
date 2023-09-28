document.addEventListener("DOMContentLoaded", function () {
  const clickSound = document.getElementById("clickSound");

  document.addEventListener("click", function () {
    clickSound.play();
  });

  function updateClock() {
    const clockDisplay = document.getElementById("clockDisplay");
    const now = new Date();

    const cstTime = now.toLocaleTimeString("en-US", { timeZone: "CST" });

    clockDisplay.textContent = cstTime;
  }

  setInterval(updateClock, 1000);

  updateClock();
});
