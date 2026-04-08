const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const meetings = [];

for (let i = 1; i <= n; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    meetings.push([s, e]);
}

meetings.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
});

let count = 0;
let lastEnd = 0;

for (const [start, end] of meetings) {
    if (start >= lastEnd) {
        count++;
        lastEnd = end;
    }
}

console.log(count);