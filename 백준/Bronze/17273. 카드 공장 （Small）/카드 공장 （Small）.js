const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const cards = [];
for (let i = 0; i < N; i++) {
    const [a, b] = input.shift().split(' ').map(Number);
    cards.push([a, b]);
}

const current = cards.map(card => card[0]);

for (let i = 0; i < M; i++) {
    const K = Number(input.shift());
    
    for (let j = 0; j < N; j++) {
        if (current[j] <= K) {
            if (current[j] === cards[j][0]) {
                current[j] = cards[j][1]
            } else {
                current[j] = cards[j][0]
            }
        }
    }
}

console.log(current.reduce((acc, cur) => acc + cur, 0));