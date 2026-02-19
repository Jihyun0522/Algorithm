const input = require('fs').readFileSync(0).toString().trim();
const n = parseInt(input);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}