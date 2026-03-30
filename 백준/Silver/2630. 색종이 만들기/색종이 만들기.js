const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
const paper = [];
for (let i = 0; i < N; i++) {
    paper.push(input.shift().split(' ').map(Number));
}

let white = 0;
let blue = 0;

function solve(x, y, size) {
    const color = paper[x][y];
    let allSame = true;
    
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (paper[i][j] != color) {
                allSame = false;
                break;
            }
        }
    }
    
    if (allSame) {
        if (color === 0) {
            white++;
        } else {
            blue++;
        }
        return;
    }
    
    const half = Math.floor(size / 2);
    solve(x, y, half);
    solve(x + half, y, half);
    solve(x, y + half, half);
    solve(x + half, y + half, half);
}

solve(0, 0, N);
console.log(white);
console.log(blue);