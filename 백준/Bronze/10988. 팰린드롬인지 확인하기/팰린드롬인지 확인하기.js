const s = require('fs').readFileSync(0).toString().trim();
console.log(s === s.split('').reverse().join('') ? 1 : 0);