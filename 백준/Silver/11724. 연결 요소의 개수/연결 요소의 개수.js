const input = require('fs').readFileSync(0).toString().trim().split('\n');
let idx = 0;
const [N, M] = input[idx++].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);
const visited = new Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
    const [a, b] = input[idx++].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

function dfs(start) {
    const stack = [start];
    visited[start] = true;
    while (stack.length > 0) {
        const v = stack.pop();
        for (let i = graph[v].length - 1; i >= 0; i--) {
            const next = graph[v][i];
            if (!visited[next]) {
                visited[next] = true;
                stack.push(next);
            }
        }
    }
}

let count = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        count++;
    }
}
console.log(count);