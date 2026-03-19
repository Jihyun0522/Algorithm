const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

const N = Number(input[0]);
const K = Number(input[1]);

let queue = [];
for (let i = 1; i <= N; i++) {
    queue.push(i);
}

let result = [];
while (queue.length > 0) {
    for (let i = 0; i < K - 1; i++) {
        queue.push(queue.shift());
    }
    result.push(queue.shift());
}

console.log("<" + result.join(', ') + ">")