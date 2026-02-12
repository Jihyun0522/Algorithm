const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);
    console.log(getResult(x1, y1, r1, x2, y2, r2));
}

function getResult(x1, y1, r1, x2, y2, r2) {
    const dSquared = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    
    const sumRSquared = Math.pow(r1 + r2, 2);
    const diffRSquared = Math.pow(r1 - r2, 2);

    if (dSquared === 0 && r1 === r2) {
        return -1;
    }

    if (dSquared === sumRSquared || dSquared === diffRSquared) {
        return 1;
    }
    
    if (dSquared > diffRSquared && dSquared < sumRSquared) {
        return 2;
    }

    return 0;
}