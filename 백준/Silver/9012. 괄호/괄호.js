const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = input.shift();

for (let ps of input) {
    let count = 0;
    
    for (let char of ps) {
        if (char === '(') {
            count += 1;
        } else if (char === ')') {
            count -= 1;
        }
        
        if (count < 0) {
            break;
        }
    }
    
    console.log(count === 0 ? 'YES' : 'NO');
}