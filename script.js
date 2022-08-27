'use strict';
let operand1 = '';
let operand2 = '';
let opSwitch = true;
let op = '';

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
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');

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
      console.log('Operator function error');
      return;
  }
}

function displayUpdate(num) {
  display.textContent = num;
  return;
}

function allClear() {
  displayUpdate('');
  operand1 = '';
  operand2 = '';
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
    if (opSwitch) {
      opSwitch = false;
      op = operator.textContent;
      displayUpdate('');
      return;
    } else {
      let output = operate(op, operand1, operand2);
      displayUpdate(output);
      operand1 = output;
      operand2 = '';
      op = operator.textContent;
      return;
    }
  })
);

equal.addEventListener('click', function () {
  let output = operate(op, operand1, operand2);
  displayUpdate(output);
  operand1 = output;
  operand2 = '';
  op = '';
  return;
});
