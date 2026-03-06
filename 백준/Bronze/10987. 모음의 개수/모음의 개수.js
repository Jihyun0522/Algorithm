const input = require('fs').readFileSync(0).toString().trim();
const vowels = "aeiou";
let count = 0;

for (let char of input) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(count);