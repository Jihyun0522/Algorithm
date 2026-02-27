const [m, Seed, X1, X2] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let ansA = 0;
let ansC = 0;

for (let a = 0; a < m; a++) {
    for (let c = 0; c < m; c++) {
        if ((a * Seed + c) % m === X1 && (a * X1 + c) % m === X2) {
            ansA = a;
            ansC = c;
            break;
        }
    }
}

console.log(`${ansA} ${ansC}`);