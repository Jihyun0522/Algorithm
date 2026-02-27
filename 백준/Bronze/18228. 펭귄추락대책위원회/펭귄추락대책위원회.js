const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);
const N = Number(input[0]);
const A = input.slice(1).map(Number);

const penguinIndex = A.indexOf(-1);

let leftMin = Infinity;
for (let i = 0; i < penguinIndex; i++) {
    if (A[i] < leftMin) leftMin = A[i];
}

let rightMin = Infinity;
for (let i = penguinIndex + 1; i < N; i++) {
    if (A[i] < rightMin) rightMin = A[i];
}

console.log(leftMin + rightMin);