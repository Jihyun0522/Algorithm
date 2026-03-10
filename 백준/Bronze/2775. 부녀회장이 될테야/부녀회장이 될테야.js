const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);
let line = 0;
let T = Number(input[line++]);

const output = [];

while (T > 0 && line < input.length) {
    const k = Number(input[line++]);
    const n = Number(input[line++]);
    
    let people = Array.from({ length: n }, (_, i) => i + 1);
    
    for (let i = 0; i < k; i++) {
        for (let j = 1; j < n; j++) {
            people[j] += people[j - 1];
        }
    }
    output.push(people[n - 1]);
    T -= 1;
}

if (output.length > 0) {
    console.log(output.join('\n'));
}