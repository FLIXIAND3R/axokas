// turbo.js

// 1. Define global speed variables
let speedMultiplier = 1; 
const TURBO_FACTOR = 4;

// 2. Add the button click handler
const turboBtn = document.getElementById('turbo-btn');
if (turboBtn) {
  turboBtn.addEventListener('click', () => {
    if (speedMultiplier === 1) {
      speedMultiplier = TURBO_FACTOR;
      turboBtn.innerText = 'Turbo: ON';
    } else {
      speedMultiplier = 1;
      turboBtn.innerText = 'Turbo: OFF';
    }
  });
}
