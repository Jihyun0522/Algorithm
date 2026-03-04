const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(lines[0]);

for (let i = 1; i <= N; i++) {
    const [repeatCount, targetString] = lines[i].split(' ');
    const R = Number(repeatCount);
    
    let P = "";
    
    for (let char of targetString) {
        P += char.repeat(R);
    }
    
    console.log(P);
}