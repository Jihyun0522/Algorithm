const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input.shift())

for (let t = 0; t < T; t++) {
    const [y, m] = input.shift().split(' ').map(Number);
    const date = new Date(y, m - 1, 0);
    console.log(`${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`);
}