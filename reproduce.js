// ============================================
// Bug 复现脚本: sum() off-by-one error
// Issue: sum() skips the last element in array
// File: calc.js:20 — i < arr.length - 1
// ============================================

const calc = require('./calc.js');

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
    console.log(`  ✓ PASS: ${msg}`);
  } else {
    failed++;
    console.log(`  ✗ FAIL: ${msg}`);
  }
}

console.log('Bug: sum() skips the last element\n');
console.log('--- Test Cases ---\n');

// Case 1: Original issue report
const result1 = calc.sum([1, 2, 3, 4]);
assert(result1 === 10, `sum([1,2,3,4]) = ${result1} (expected: 10)`);

// Case 2: Single element array — should return the element itself
const result2 = calc.sum([42]);
assert(result2 === 42, `sum([42]) = ${result2} (expected: 42)`);

// Case 3: Empty array — should return 0
const result3 = calc.sum([]);
assert(result3 === 0, `sum([]) = ${result3} (expected: 0)`);

// Case 4: Two elements — off-by-one cuts off last
const result4 = calc.sum([5, 7]);
assert(result4 === 12, `sum([5,7]) = ${result4} (expected: 12)`);

// Case 5: Negative numbers
const result5 = calc.sum([-1, -2, -3]);
assert(result5 === -6, `sum([-1,-2,-3]) = ${result5} (expected: -6)`);

// Case 6: Large array
const arr = Array.from({ length: 100 }, (_, i) => i + 1); // [1..100]
const expectedSum = (100 * 101) / 2; // Gauss formula: 5050
const result6 = calc.sum(arr);
assert(result6 === expectedSum, `sum([1..100]) = ${result6} (expected: ${expectedSum})`);

console.log(`\n--- Result: ${passed}/${passed + failed} passed ---`);
process.exit(failed > 0 ? 1 : 0);
