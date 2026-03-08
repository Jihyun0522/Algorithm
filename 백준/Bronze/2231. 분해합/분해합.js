const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);
let result = 0;

for (let i = 1; i < N; i++) {
    let sum = i;
    let temp = i;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    if (sum === N) {
        result =  i;
        break;
    }
}

console.log(result);