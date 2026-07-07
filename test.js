const calc = require('./calc.js');

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
    console.log(`PASS: ${msg}`);
  } else {
    failed++;
    console.log(`FAIL: ${msg}`);
  }
}

// Basic operations
assert(calc.add(2, 3) === 5, 'add(2,3) = 5');
assert(calc.subtract(5, 3) === 2, 'subtract(5,3) = 2');
assert(calc.multiply(4, 3) === 12, 'multiply(4,3) = 12');
assert(calc.divide(10, 2) === 5, 'divide(10,2) = 5');

// Division by zero (currently broken - returns Infinity instead of throwing)
assert(calc.divide(10, 0) === Infinity, 'divide(10,0) = Infinity (BUG: should throw)');

// Sum function (broken - skips last element)
assert(calc.sum([1, 2, 3, 4]) === 10, 'sum([1,2,3,4]) = 10');
// currently returns 6 because loop skips last element

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
