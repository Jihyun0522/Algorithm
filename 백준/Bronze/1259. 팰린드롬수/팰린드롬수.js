const input = require('fs').readFileSync(0).toString().trim().split('\n');

for (let line of input) {
    const str = line.trim();
    
    if (str === '0') {
        break; 
    }
    
    console.log(str === str.split('').reverse().join('') ? 'yes' : 'no');
}