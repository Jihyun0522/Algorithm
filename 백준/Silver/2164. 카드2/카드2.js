const N = Number(require('fs').readFileSync(0).toString().trim());
const cards = [];

for (let i = 1; i <= N; i++) {
    cards.push(i);
}

let head = 0;

while (cards.length - head > 1) {
    head++; 
    
    cards.push(cards[head]);
    head++;
}

console.log(cards[head]);