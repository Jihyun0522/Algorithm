const input = require('fs').readFileSync(0).toString().trim().split('\n');
const wins = {'S': 'P', 'P': 'R', 'R': 'S'};

function score(sanggeun, friend) {
    if (sanggeun === friend) return 1;
    if (wins[sanggeun] === friend) return 2;
    return 0;
}

const R = Number(input.shift());
const sanggeun = input.shift().split('');
const N = Number(input.shift());
const friends = [];
for (let i = 0; i < N; i++) {
    friends.push(input.shift().split(''));
}

let realScore = 0;
let maxScore = 0;

for (let r = 0; r < R; r++) {
    for (let n = 0; n < N; n++) {
        realScore += score(sanggeun[r], friends[n][r]);
    }
    
    let best = 0;
    for (const choice of ['S', 'P', 'R']) {
        const roundScore = friends.reduce((acc, f) => acc + score(choice, f[r]), 0);
        best = Math.max(best, roundScore);
    }
    maxScore += best;
}

console.log(realScore);
console.log(maxScore);