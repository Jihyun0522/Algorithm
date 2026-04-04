const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const candys = input[1].split(' ').map(Number);
const candySum = candys.reduce((acc, cur) => acc + cur, 0);

if (candySum % 2 === 0) {
    console.log(candySum);
} else {
    const oddCandys = candys.filter(c => c % 2 === 1);
    if (oddCandys.length === 0) {
        console.log(0);
    } else {
        console.log(candySum - Math.min(...oddCandys));
    }
}