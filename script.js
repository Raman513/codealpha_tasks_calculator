const display = document.querySelector('input[name="display"]');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendToDisplay(key);
  }

  if (key === 'Enter') {
    event.preventDefault();
    calculateResult();
  }

  if (key === 'Backspace') {
    deleteLast();
  }

  if (key === 'Escape') {
    clearDisplay();
  }
});
