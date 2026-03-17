const input = require('fs').readFileSync(0).toString().split('\n');

for (let line of input) {
    if (line === ".") {
        break;
    }
    
    let stack = [];
    let isBalanced = true;
    
    for (let char of line) {
        if (char === '(' || char === '[') {
            stack.push(char);
        } else if (char === ')') {
            if (!stack.length || stack[stack.length - 1] !== '(') {
                isBalanced = false;
                break;
            }
            stack.pop();
        } else if (char === ']') {
            if (!stack.length || stack[stack.length - 1] !== '[') {
                isBalanced = false;
                break;
            }
            stack.pop();
        }
    }
    
    if (isBalanced && stack.length === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}