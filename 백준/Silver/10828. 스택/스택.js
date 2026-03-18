const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
let stack = [];
let results = [];

for (let line of input) {
    const [command, value] = line.split(' ');
    
    switch (command) {
        case 'push':
            stack.push(Number(value));
            break;
        case 'pop':
            if (stack.length === 0) {
              results.push(-1);
            } else {
              results.push(stack.pop());
            }
            break;
        case 'size':
            results.push(stack.length);
            break;
        case 'empty':
            if (stack.length === 0) {
              results.push(1);
            } else {
              results.push(0);
            }
            break;
        case 'top':
            if (stack.length === 0) {
              results.push(-1);
            } else {
              results.push(stack[stack.length - 1]);
            }
            break;
    }
}

console.log(results.join('\n'));