const input = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    
    if (!isNaN(A) && !isNaN(B)) {
        console.log(A + B);
    }
}