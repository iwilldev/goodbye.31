const screen = document.querySelector('textarea');
let isLastInputANumber = false;
let isResultDisplayed = false;
screen.value = '';

function clearScreen() {
  isLastInputANumber = false;
  isResultDisplayed = false;
  screen.value = '';
}

function inputOperator(key) {
  if (isLastInputANumber) {
    screen.value += key;
    isLastInputANumber = false;
    isResultDisplayed = false;
  }
}

function inputNumber(key) {
  if (isResultDisplayed) {
    screen.value = key;
    isResultDisplayed = false;
    isLastInputANumber = true;
  } else {
    screen.value += key;
    isLastInputANumber = true;
  }
}

function displayResult() {
  screen.value = math.evaluate(calc.txt.value);
  isResultDisplayed = true;
}