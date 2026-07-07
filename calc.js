// Simple calculator module
// Contains deliberate bugs for issue testing

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// BUG: division does not handle division by zero
function divide(a, b) {
  return a / b;  // returns Infinity when b=0, should throw error
}

// BUG: sum function has off-by-one error in loop
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {  // BUG: should be i < arr.length
    total += arr[i];
  }
  return total;
}

module.exports = { add, subtract, multiply, divide, sum };
