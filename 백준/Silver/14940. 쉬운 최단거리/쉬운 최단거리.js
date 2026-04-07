const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const grid = [];
for (let i = 0; i < n; i++) {
    grid.push(input[i].split(' ').map(Number));
}

const dist = [];
for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
        row.push(grid[i][j] === 0 ? 0 : -1);
    }
    dist.push(row);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    const queue = [[x, y]];
    dist[x][y] = 0;

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        
        for (let d = 0; d < 4; d++) {
            const nx = cx + dx[d];
            const ny = cy + dy[d];
            
            if ((nx >= 0 && nx < n) && (ny >= 0 && ny < m)) {
                if (dist[nx][ny] === -1 && grid[nx][ny] !== 0) {
                    dist[nx][ny] = dist[cx][cy] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (grid[i][j] === 2) {
            bfs(i, j);
        }
    }
}

for (let row of dist) {
    console.log(row.join(' '));
}