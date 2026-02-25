const input = require('fs').readFileSync(0).toString().trim();
let word = '';

for (let char of input) {
    if (char === char.toUpperCase()) {
        word += char.toLowerCase();
    } else {
        word += char.toUpperCase();
    }
}

console.log(word);