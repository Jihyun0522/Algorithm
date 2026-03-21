const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const sequence = input.slice(1).map(Number);
let stack = [];
let answer = [];
let current = 1;
let possible = true;

for (let i = 0; i < n; i++) {
    const target = sequence[i];

    while (current <= target) {
        stack.push(current);
        answer.push('+');
        current++;
    }

    if (stack[stack.length - 1] === target) {
        stack.pop();
        answer.push('-');
    } else {
        possible = false;
        break;
    }
}

if (possible) {
    console.log(answer.join('\n'));
} else {
    console.log("NO");
}