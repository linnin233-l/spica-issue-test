// ============================================================
// 复现脚本: isEven() bug — 运算符误用 / 代替 %
// Issue: isEven(4) returns false instead of true
// ============================================================

const calc = require('./calc.js');

let pass = 0;
let fail = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    pass++;
  } else {
    console.log(`  ✗ FAIL: ${message}`);
    fail++;
  }
}

console.log('复现: isEven() 运算符误用 bug\n');
console.log('--- 核心用例（来自 issue）---');
assert(calc.isEven(4) === true,  'isEven(4) === true');
assert(calc.isEven(3) === false, 'isEven(3) === false');

console.log('\n--- 扩展边界用例 ---');
assert(calc.isEven(0)  === true,  'isEven(0)  === true   (零是偶数, 碰巧通过)');
assert(calc.isEven(2)  === true,  'isEven(2)  === true   (正偶数)');
assert(calc.isEven(6)  === true,  'isEven(6)  === true   (正偶数)');
assert(calc.isEven(10) === true,  'isEven(10) === true   (正偶数)');
assert(calc.isEven(100) === true, 'isEven(100) === true  (大偶数)');
assert(calc.isEven(-2) === true,  'isEven(-2) === true   (负偶数)');
assert(calc.isEven(-4) === true,  'isEven(-4) === true   (负偶数)');
assert(calc.isEven(1)  === false, 'isEven(1)  === false  (正奇数)');
assert(calc.isEven(5)  === false, 'isEven(5)  === false  (正奇数)');
assert(calc.isEven(-1) === false, 'isEven(-1) === false  (负奇数)');
assert(calc.isEven(-3) === false, 'isEven(-3) === false  (负奇数)');

// 浮点数边界：严格来说 isEven 不应接收浮点数，但可以观察行为
console.log('\n--- 非整数输入（仅供参考）---');
console.log(`  INFO: isEven(2.0) = ${calc.isEven(2.0)} (2.0/2=1, 1===0 → false)`);
console.log(`  INFO: isEven(2.5) = ${calc.isEven(2.5)} (2.5/2=1.25, 1.25===0 → false)`);

console.log(`\n========================================`);
console.log(`结果: ${pass} passed, ${fail} failed`);

if (fail > 0) {
  console.log('\n[REPRODUCED] Bug 确认存在！');
  console.log(`预期 failing 用例: isEven(4), isEven(2), isEven(6), isEven(10), isEven(100), isEven(-2), isEven(-4)`);
  console.log(`唯一能通过的偶数只有 isEven(0)——因为 0/2=0 且 0===0。`);
  console.log(`根因: calc.js 中 return n / 2 === 0 应为 return n % 2 === 0`);
  process.exit(1);
} else {
  console.log('\n[NOT REPRODUCED] Bug 已修复或不存在');
  process.exit(0);
}
