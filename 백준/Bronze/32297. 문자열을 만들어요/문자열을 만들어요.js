const input = require('fs').readFileSync(0).toString().trim().split('\n');
const S = input[1];
console.log(S.includes('gori') ? 'YES' : 'NO');