const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input.shift());

for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const idx = line.indexOf('D');
    console.log(idx !== -1 ? idx : line.length);
}