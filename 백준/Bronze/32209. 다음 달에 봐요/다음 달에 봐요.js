const input = require('fs').readFileSync(0).toString().trim().split('\n');
const Q = Number(input.shift());
let pool = 0;
let dissolved = false;

for (let line of input) {
    const [check, n] = line.split(' ').map(Number);
    
    if (check === 1) {
        pool += n;
    } else {
        if (pool >= n) {
            pool -= n;
        } else {
            dissolved = true;
            break;
        }
    }
}

if (dissolved) {
    console.log('Adios');
} else {
    console.log('See you next month');
}