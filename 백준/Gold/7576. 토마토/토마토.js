const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);
const graph = [];
for (let i = 0; i < N; i++) {
    graph.push(input[i].split(' ').map(Number));
}

const queue = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1) {
            queue.push([i, j]);
        }
    }
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let head = 0;
while (head < queue.length) {
    const [r, c] = queue[head++];
    
    for (let d = 0; d < 4; d++) {
        const nr = r + dr[d];
        const nc = c + dc[d];
        
        if ((nr >= 0 && nr < N) && (nc >= 0 && nc < M)) {
            if (graph[nr][nc] === 0) {
                graph[nr][nc] = graph[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
}

let result = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (graph[i][j] === 0) {
            console.log(-1);
            process.exit();
        }
        result = Math.max(result, graph[i][j]);
    }
}
console.log(result - 1);