const input = require('fs').readFileSync(0).toString().trim().split('\n');
let idx = 0;
const [N, M] = input[idx++].split(' ').map(Number);
const maze = [];
for (let i = 0; i < N; i++) {
    maze.push(input[idx++].trim().split('').map(Number));
}

const visited = Array.from({length: N}, () => new Array(M).fill(false));
const queue = [[0, 0, 1]];
visited[0][0] = true;
let front = 0;

while (front < queue.length) {
    const [row, col, dist] = queue[front++];
    
    if (row === N-1 && col === M-1) {
        console.log(dist);
        break;
    }
    
    for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nr = row + dr;
        const nc = col + dc;
        
        if ((nr >= 0 && nr < N) && (nc >= 0 && nc < M) && maze[nr][nc] === 1 && !visited[nr][nc]) {
            visited[nr][nc] = true;
            queue.push([nr, nc, dist + 1]);
        }
    }
}