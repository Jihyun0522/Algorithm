let [A, B] = require('fs').readFileSync(0).toString().trim().split(' ');
A = Number(String(A).split('').reverse().join(''));
B = Number(String(B).split('').reverse().join(''));
console.log(A > B ? A : B);