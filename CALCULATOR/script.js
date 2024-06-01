// CALCULATOR

let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

updateDisplay(); 