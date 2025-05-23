function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('digitalClock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
