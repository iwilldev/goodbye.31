const submitButton = document.querySelector('form .submit');
const openTestButton = document.querySelector('form .open');
const testMessage = document.querySelector('form .test-message');
const testBox = document.querySelector('form .test');
const bar = testBox.querySelector('.fill');
const trigger = testBox.querySelector('.trigger');

let barWidth = 0;
let triggerPosition = 0;
let isPressed = false;

openTestButton.addEventListener("pointerdown", function() {
  testBox.classList.remove('hidden');
  testMessage.classList.remove('hidden');
  openTestButton.classList.add('hidden');

  return openTestButton.removeEventListener("pointerdown", this);
});

testBox.addEventListener("pointerdown", () => {
  triggerPosition = getRandomPosition();
  trigger.style.left = `${triggerPosition}px`;
  trigger.classList.remove('hidden');
  isPressed = true;
  fillBar();
  return testBox.removeEventListener("pointerdown", this);
})

testBox.addEventListener("pointerup", () => {
  isPressed = false;
  if (barWidth > triggerPosition && barWidth < (triggerPosition + 30)) {
    testMessage.innerHTML = 'Verificado!';
    testBox.classList.add('hidden');
    submitButton.disabled = false;
  } else {
    trigger.style.left = '260px';
    trigger.classList.add('hidden');
    barWidth = 0;
    bar.style.width = `${barWidth}px`;
  }
  return testBox.removeEventListener("pointerup", this);
})

function getRandomPosition() {
  return Math.random() * (220 - 100) + 100;
}

function fillBar() {
  let start = setInterval(() => {
    if (barWidth < 250 && isPressed) {
      barWidth+=5;
      bar.style.width = `${barWidth}px`;
    } else {
      clearInterval(start);
      start = 0;
    }
  }, 30)
}