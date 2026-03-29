const input = require('fs').readFileSync(0).toString().trim();
const parts = input.split('-');
let result = 0;

for (let i = 0; i < parts.length; i++) {
    const part = parts[i].split('+').map(Number);
    if (i === 0) {
        result += part.reduce((acc, cur) => acc + cur, 0);
    } else {
        result -= part.reduce((acc, cur) => acc + cur, 0);
    }
}

console.log(result);