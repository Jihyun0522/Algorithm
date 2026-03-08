const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
let count = 0;

for (let num of numbers) {
    if (num < 2) {
        continue;
    }
    
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        count++;
    }
}

console.log(count);