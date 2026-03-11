const input = require('fs').readFileSync(0).toString().trim();
const isbn = input.split('');

let totalSum = 0;
let targetWeight = 0;

for (let i = 0; i < 13; i++) {
    let weight = (i % 2 === 0) ? 1 : 3;
    
    if (isbn[i] === '*') {
        targetWeight = weight;
    } else {
        totalSum += Number(isbn[i]) * weight;
    }
}

for (let x = 0; x < 10; x++) {
    if ((totalSum + (targetWeight * x)) % 10 === 0) {
        console.log(x);
        break;
    }
}