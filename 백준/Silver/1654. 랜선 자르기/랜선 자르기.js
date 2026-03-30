const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [K, N] = input.shift().split(' ').map(Number);
const lines = input.map(Number);

let start = 1;
let end = Math.max(...lines);

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    
    for (let i of lines) {
        count += Math.floor(i / mid);
    }
    
    if (count >= N) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(end);