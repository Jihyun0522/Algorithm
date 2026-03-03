const input = require('fs').readFileSync(0).toString().trim();
let results = [];

for (let i = 97; i <= 122; i++) {
    let char = String.fromCharCode(i);
    
    results.push(input.indexOf(char));
}

console.log(results.join(' '));