const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);

for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i));
}