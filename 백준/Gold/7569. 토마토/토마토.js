const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [M, N, H] = input.shift().split(' ').map(Number);

const graph = [];
for (let h = 0; h < H; h++) {
    const layer = [];
    for (let i = 0; i < N; i++) {
        layer.push(input.shift().split(' ').map(Number));
    }
    graph.push(layer);
}

const queue = [];
for (let h = 0; h < H; h++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[h][i][j] === 1) {
                queue.push([h, i, j]);
            }
        }
    }
}

const dh = [0, 0, 0, 0, 1, -1];
const dr = [-1, 1, 0, 0, 0, 0];
const dc = [0, 0, -1, 1, 0, 0];

let head = 0;
while (head < queue.length) {
    const [h, r, c] = queue[head++];
    
    for (let d = 0; d < 6; d++) {
        const nh = h + dh[d];
        const nr = r + dr[d];
        const nc = c + dc[d];
        
        if ((nh >= 0 && nh < H) && (nr >= 0 && nr < N) && (nc >= 0 && nc < M)) {
            if (graph[nh][nr][nc] === 0) {
                graph[nh][nr][nc] = graph[h][r][c] + 1;
                queue.push([nh, nr, nc]);
            }
        }
    }
}

let result = 0;
for (let h = 0; h < H; h++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[h][i][j] === 0) {
                console.log(-1);
                process.exit();
            }
            result = Math.max(result, graph[h][i][j]);
        }
    }
}

console.log(result - 1);