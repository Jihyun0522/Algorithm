const input = require('fs').readFileSync(0).toString().trim().split('\n');
const L = Number(input[0]);
const S = input[1];

const r = 31n;
const M = 1234567891n;

let totalHash = 0n;
let power = 1n;

for (let i = 0; i < L; i++) {
    const charVal = BigInt(S.charCodeAt(i) - 96);
    totalHash = (totalHash + charVal * power) % M;
    power = (power * r) % M;
}

console.log(totalHash.toString());