const input = require('fs').readFileSync(0).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const str = input[i].trim();
    console.log(str[0] + str[str.length - 1]);
}