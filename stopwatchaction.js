let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let running = false;

const display = document.getElementById('stopwatchDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1000);
    running = true;
  }
});

pauseBtn.addEventListener('click', () => {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  updateDisplay();
});