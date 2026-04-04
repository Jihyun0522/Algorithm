const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const fruits = input[1].split(' ').map(Number);

let left = 0;
let maxLength = 0;
const counter = new Map();

for (let right = 0; right < N; right++) {
    const fruit = fruits[right];
    counter.set(fruit, (counter.get(fruit) || 0) + 1);
    
    while (counter.size > 2) {
        const leftFruit = fruits[left];
        counter.set(leftFruit, counter.get(leftFruit) - 1);
        if (counter.get(leftFruit) === 0) {
            counter.delete(leftFruit)
        }
        left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
}
console.log(maxLength);