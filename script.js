'use strict';
let operand1 = '';
let operand2 = '';
let opSwitch = true;
let op = '';
let output = '';

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const dot = document.querySelector('.dot');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
const displayContent = document.querySelector('p');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const backspace = document.querySelector('.backspace');

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    case '/':
      return Number(num1) / Number(num2);
    default:
      console.log(
        `Operator function error: operator: ${
          operator ? operator : 'no operator'
        }, num1: ${num1}, num2: ${num2}.`
      );
      return;
  }
}

function displayUpdate(num) {
  displayContent.textContent = num;
  return;
}

function allClear() {
  displayUpdate('');
  operand1 = '';
  operand2 = '';
  opSwitch = true;
  dot.disabled = false;
}

nums.forEach(num =>
  num.addEventListener('click', function () {
    let numContent = num.textContent;
    if (opSwitch) {
      operand1 += numContent;
      displayUpdate(operand1);
    } else {
      operand2 += numContent;
      displayUpdate(operand2);
    }
  })
);

clear.addEventListener('click', function () {
  allClear();
});

operators.forEach(operator =>
  operator.addEventListener('click', function () {
    if (!operand1) {
      return;
    }
    if (opSwitch) {
      opSwitch = false;
      op = operator.textContent;
      displayUpdate('');
      dot.disabled = false;
      return;
    } else {
      output = operate(op, operand1, operand2);
      displayUpdate(output);
      operand1 = output;
      operand2 = '';
      op = operator.textContent;
      dot.disabled = false;
      return;
    }
  })
);

equal.addEventListener('click', function () {
  if (opSwitch) {
    return;
  }
  output = operate(op, operand1, operand2);
  displayUpdate(output);
  operand1 = output;
  operand2 = '';
  op = '';
  opSwitch = true;
  dot.disabled = false;
  return;
});

dot.addEventListener('click', function () {
  let dotContent = dot.textContent;
  if (opSwitch) {
    operand1 += dotContent;
    displayUpdate(operand1);
    dot.disabled = true;
  } else {
    operand2 += dotContent;
    displayUpdate(operand2);
    dot.disabled = true;
  }
});

backspace.addEventListener('click', function () {
  if (opSwitch) {
    operand1 = operand1.slice(0, operand1.length - 1);
    displayUpdate(operand1);
  } else {
    operand2 = operand2.slice(0, operand2.length - 1);
    displayUpdate(operand2);
  }
});
