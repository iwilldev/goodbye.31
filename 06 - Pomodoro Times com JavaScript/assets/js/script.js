let startButton = document.querySelector('main .container .button-container .start');
let pauseButton = document.querySelector('main .container .button-container .pause');
let resetButton = document.querySelector('main .container .button-container .reset');

let focusMinutes = document.querySelector('main .container .focus-timer .focus-minutes');
let focusSeconds = document.querySelector('main .container .focus-timer .focus-seconds');
let focusInput = document.querySelector('main .container #focus-input');
let focusInitialTime = focusInput.value;
focusMinutes.innerText = focusInitialTime;

let breakMinutes = document.querySelector('main .container .break-timer .break-minutes');
let breakSeconds = document.querySelector('main .container .break-timer .break-seconds');
let breakInput = document.querySelector('main .container #break-input');
let breakInitialTime = breakInput.value;
breakMinutes.innerText = breakInitialTime;

let startTimer;

startButton.addEventListener('pointerdown', () => {
  if(startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert('O timer já está ativo');
  }
  startButton.removeEventListener('pointerdown', this);
})

resetButton.addEventListener('pointerdown', () => {
  focusMinutes.innerText = focusInitialTime;
  focusSeconds.innerText = "00";
    
  breakMinutes.innerText = breakInitialTime;
  breakSeconds.innerText = "00";

  document.querySelector('main .container #cycles .cycles-counter').innerText = 0;
  stopInterval();
  startTimer = undefined;
  resetButton.removeEventListener('pointerdown', this);
})

pauseButton.addEventListener('pointerdown', () => {
  stopInterval();
  startTimer = undefined;
  pauseButton.removeEventListener('pointerdown', this);
})

focusInput.addEventListener('change', function() {
  focusInitialTime = focusInput.value;
  focusMinutes.innerText = focusInitialTime;
  focusInput.removeEventListener('change', this);
})

breakInput.addEventListener('change', function() {
  breakInitialTime = breakInput.value;
  breakMinutes.innerText = breakInitialTime;
  breakInput.removeEventListener('change', this);
})

let pauseTime = false;

function timer() {

  if (!pauseTime) {
    if(focusSeconds.innerText != 0){
      focusSeconds.innerText--;
      return null;
    } else if(focusMinutes.innerText != 0 && focusSeconds.innerText == 0) {
      focusSeconds.innerText = 59;
      focusMinutes.innerText--;
      return null;
    }
    pauseTime = true;
    window.focus();
    alert('Dê uma pausa!');
  }
  
  if (pauseTime) {
    if(breakSeconds.innerText != 0){
      breakSeconds.innerText--;
      return null;
    } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
      breakSeconds.innerText = 59;
      breakMinutes.innerText--;
      return null;
    }
    pauseTime = false;
    alert('Volte ao foco!');
  }

  focusMinutes.innerText = focusInitialTime;
  focusSeconds.innerText = "00";
  
  breakMinutes.innerText = breakInitialTime;
  breakSeconds.innerText = "00";

  document.querySelector('main .container #cycles .cycles-counter').innerText++;
  
}

function stopInterval() {
  clearInterval(startTimer);
}
