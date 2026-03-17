const input = require('fs').readFileSync(0).toString().trim().split('\n');
const K = Number(input.shift());
const numbers = input.map(Number);
let stack = [];

for (let num of numbers) {
    if (num === 0) {
        stack.pop();
    } else {
        stack.push(num);
    }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));