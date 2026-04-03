const input = require('fs').readFileSync(0).toString().split('\n');
let idx = 0;
const [N, M] = input[idx++].split(' ').map(Number);
const campus = [];
let startX = 0, startY = 0;

for (let i = 0; i < N; i++) {
    const row = input[idx++].trim().split('');
    campus.push(row);
    for (let j = 0; j < M; j++) {
        if (row[j] === 'I') {
            startX = i;
            startY = j;
        }
    }
}

function bfs(x, y) {
    const queue = [[x, y]];
    const visited = Array.from({length: N}, () => new Array(M).fill(false));
    visited[x][y] = true;
    let front = 0;
    let count = 0;

    while (front < queue.length) {
        const [cx, cy] = queue[front++];
        for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (0 <= nx && nx < N && 0 <= ny && ny < M && campus[nx][ny] !== 'X' && !visited[nx][ny]) {
                visited[nx][ny] = true
                if (campus[nx][ny] === 'P') {
                    count++;
                }
                queue.push([nx, ny]);
            }
        }
    }
    return count;
}

const result = bfs(startX, startY);
console.log(result > 0 ? result : 'TT');