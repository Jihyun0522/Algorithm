const input = require('fs').readFileSync(0).toString().trim().split('\n');
let idx = 0;
const N = Number(input[idx++]);
const field = [];
for (let i = 0; i < N; i++) {
    field.push(input[idx++].trim().split('').map(Number));
}
const visited = Array.from({length: N}, () => new Array(N).fill(false));

function dfs(x, y) {
    visited[x][y] = true;
    let count = 1;
    for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nx = x + dx;
        const ny = y + dy;
        
        if ((nx >= 0 && nx < N) && (ny >= 0 && ny < N) && field[nx][ny] === 1 && !visited[nx][ny]) {
            count += dfs(nx, ny);
        }
    }
    return count;
}

const result = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (field[i][j] === 1 && !visited[i][j]) {
            result.push(dfs(i, j));
        }
    }
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join('\n'));