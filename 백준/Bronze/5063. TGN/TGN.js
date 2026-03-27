const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());

for (let i = 0; i < input.length; i++) {
    const [r, e, c] = input[i].split(' ').map(Number);
    const profit = e - c;
    
    if (r < profit) {
        console.log("advertise");
    } else if (r > profit) {
        console.log("do not advertise");
    } else {
        console.log("does not matter");
    }
}