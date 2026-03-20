const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, W, H] = input.shift().split(' ').map(Number);
const maxSq = Math.pow(W, 2) + Math.pow(H, 2);

for (let line of input) {
    const macthLength = Number(line);
    if (Math.pow(macthLength, 2) <= maxSq) {
        console.log("DA");
    } else {
        console.log("NE");
    }
}