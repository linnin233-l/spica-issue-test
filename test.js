const calc = require('./calc.js');
let p=0,f=0;
function assert(c,m){if(c){p++;console.log('PASS: '+m)}else{f++;console.log('FAIL: '+m)}}
assert(calc.isEven(4)===true,'isEven(4) = true');
assert(calc.isEven(3)===false,'isEven(3) = false');
console.log('\n'+p+' passed, '+f+' failed');
process.exit(f>0?1:0);
