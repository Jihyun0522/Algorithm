const input = require('fs').readFileSync(0).toString().trim().split('\n');

const sanggeunCards = input[1].split(' ');
const checkCards = input[3].split(' ');

const cardMap = new Map();

for (let card of sanggeunCards) {
    cardMap.set(card, (cardMap.get(card) || 0) + 1);
}

const results = [];
for (let target of checkCards) {
    results.push(cardMap.get(target) || 0);
}

console.log(results.join(' '));