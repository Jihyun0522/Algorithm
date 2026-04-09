const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input.shift())
let idx = 0;

for (let t = 0; t < T; t++) {
    const p = input[idx++];
    const n = Number(input[idx++]);
    const arr = input[idx++];
    
    let dq;
    if (arr === '[]') {
        dq = [];
    } else {
        dq = arr.slice(1, -1).split(',').map(Number);
    }
    
    let isReversed = false;
    let error = false;
    
    for (let cmd of p) {
        if (cmd === 'R') {
            isReversed = !isReversed;
        } else if (cmd === 'D') {
            if (dq.length === 0) {
                error = true;
                break;
            }
            
            if (isReversed) {
                dq.pop();
            } else {
                dq.shift();
            }
        }
    }
    
    if (error) {
        console.log('error');
    } else {
        if (isReversed) {
            dq = dq.reverse();
        }
        console.log('[' + dq.join(',') + ']');
    }
}