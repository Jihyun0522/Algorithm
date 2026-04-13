const dial = [2,2,2, 3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7,7, 8,8,8, 9,9,9,9];
const word = require('fs').readFileSync(0).toString().trim();
let total = 0;

for (let w of word) {
    const idx = w.charCodeAt(0) - 'A'.charCodeAt(0);
    total += dial[idx] + 1;
}
console.log(total);