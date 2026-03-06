const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);
let results = [];

for (let i = 1; i <= T; i++) {
    const [H, W, N] = input[i].split(' ').map(Number);
    
    let floor = N % H;
    let room = Math.ceil(N / H);
    
    if (floor === 0) {
        floor = H;
    }
    
    results.push(floor * 100 + room);
}

console.log(results.join('\n'));