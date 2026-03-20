const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);
const count = [];

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        let wCount = 0;
        let bCount = 0;
        
        for (let di = i; di < i + 8; di++) {
            for (let dj = j; dj < j + 8; dj++) {
                if ((di + dj) % 2 === 0) {
                    if (board[di][dj] !== 'W') {
                        wCount++;
                    } else {
                        bCount++;
                    }
                } else {
                    if (board[di][dj] !== 'W') {
                        bCount++;
                    } else {
                        wCount++;
                    }
                }
            }
        }
        
        count.push(wCount);
        count.push(bCount);
    }
}

console.log(Math.min(...count));