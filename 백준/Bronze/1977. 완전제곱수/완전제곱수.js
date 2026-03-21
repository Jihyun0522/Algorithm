const [M, N] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const result = [];

for (let num = M; num <= N; num++) {
    if (Math.floor(Math.sqrt(num)) ** 2 === num) {
        result.push(num);
    }
}

if (result.length === 0){
    console.log(-1);
} else {
    console.log(result.reduce((acc, cur) => acc + cur, 0));
    console.log(Math.min(...result));
}