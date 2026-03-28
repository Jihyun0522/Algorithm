const input = require('fs').readFileSync(0).toString().trim().split('\n');

const factorials = [1];
for (let i = 1; i <= 5; i++) {
    factorials[i] = factorials[i-1] * i;
}

for (let i = 0; i < input.length; i++) {
    const num = input[i];
       
    if (num === '0') {
        break; 
    }
    
    let answer = 0;
    const reversed = num.split('').reverse().join('');
    reversed.split('').forEach((ch, j) => {
        answer += Number(ch) * factorials[j+1] 
    });
    console.log(answer);
}

