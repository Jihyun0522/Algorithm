const input = require('fs').readFileSync(0).toString().trim();

let N = Number(input);
let K = 1;
let time = 0;

while (N > 0) {
    if (K > N) {
        K = 1;
    }
    N -= K;
    time++;
    K++;
}

console.log(time);