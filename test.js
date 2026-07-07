const calc = require('./calc.js');
let p=0,f=0;
function assert(c,m){if(c){p++;console.log('PASS: '+m)}else{f++;console.log('FAIL: '+m)}}
assert(calc.greeting()==='Hello','greeting() returns "Hello"');
assert(calc.double(3)===6,'double(3) = 6');
assert(calc.double(0)===0,'double(0) = 0');
console.log('\n'+p+' passed, '+f+' failed');
process.exit(f>0?1:0);
