const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const words = [...new Set(input.map(word => word.trim()))];

words.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});

console.log(words.join('\n'));