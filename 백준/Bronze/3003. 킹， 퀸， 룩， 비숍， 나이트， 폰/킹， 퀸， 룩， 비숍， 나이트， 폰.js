const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

const standard = [1, 1, 2, 2, 2, 8];

const result = standard.map((count, index) => {
    return count - input[index];
});

console.log(result.join(' '));