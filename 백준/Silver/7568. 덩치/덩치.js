const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = Number(input.shift());
const people = input.map(line => line.split(' ').map(Number));

const ranks = [];

for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (people[j][0] > people[i][0] && people[j][1] > people[i][1]) {
            count++;
        }
    }
    ranks.push(count + 1);
}

console.log(ranks.join(' '));