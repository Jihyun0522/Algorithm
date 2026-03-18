const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
let queue = [];
let results = [];

for (let line of input) {
    const [command, value] = line.split(' ');
    
    switch (command) {
        case 'push':
            queue.push(Number(value));
            break;
        case 'pop':
            if (queue.length === 0) {
              results.push(-1);
            } else {
              results.push(queue.shift());
            }
            break;
        case 'size':
            results.push(queue.length);
            break;
        case 'empty':
            if (queue.length === 0) {
              results.push(1);
            } else {
              results.push(0);
            }
            break;
        case 'front':
            if (queue.length === 0) {
              results.push(-1);
            } else {
              results.push(queue[0]);
            }
            break;
        case 'back':
            if (queue.length === 0) {
              results.push(-1);
            } else {
              results.push(queue[queue.length - 1]);
            }
            break;
    }
}

console.log(results.join('\n'));