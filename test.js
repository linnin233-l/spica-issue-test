const calc = require('./calc.js');

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) { passed++; console.log('PASS: ' + msg); }
  else { failed++; console.log('FAIL: ' + msg); }
}

assert(calc.greeting() === 'Hello', 'greeting() returns Hello');

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed > 0 ? 1 : 0);
