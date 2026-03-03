const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const result = String(input[0] * input[1] * input[2]);

let countList = new Array(10).fill(0);
for (let num of result) {
    countList[Number(num)] += 1;
}

console.log(countList.join('\n'));