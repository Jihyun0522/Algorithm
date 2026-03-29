const input = require('fs').readFileSync(0).toString().trim().split('\n');
let idx = 0;

const T = Number(input[idx++]);
for (let t = 0; t < T; t++) {
    const [M, N, K] = input[idx++].split(' ').map(Number);
    const field = Array.from({length: N}, () => new Array(M).fill(0));
    const visited = Array.from({length: N}, () => new Array(M).fill(false));

    for (let i = 0; i < K; i++) {
        const [x, y] = input[idx++].split(' ').map(Number);
        field[y][x] = 1;
    }

    function dfs(x, y) {
        const stack = [[x, y]];
        visited[x][y] = true;
        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
                const nx = cx + dx;
                const ny = cy + dy;
                if (0 <= nx && nx < N && 0 <= ny && ny < M && field[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                }
            }
        }
    }

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (field[i][j] === 1 && !visited[i][j]) {
                dfs(i, j);
                count++;
            }
        }
    }
    console.log(count);
}