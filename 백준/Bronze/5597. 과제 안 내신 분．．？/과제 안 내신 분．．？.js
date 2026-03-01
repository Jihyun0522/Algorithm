const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
let attendance = new Array(31).fill(false);

for (let i = 0; i < input.length; i++) {
    const studentNum = input[i];
    attendance[studentNum] = true;
}

for (let j = 1; j <= 30; j++) {
    if (!attendance[j]) {
        console.log(j);
    }
}