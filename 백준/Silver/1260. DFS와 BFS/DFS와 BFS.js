

function dfs(start) {
    const stack = [start];
    const visited = new Array(N + 1).fill(false);
    const result = [];

    while (stack.length > 0) {
        const v = stack.pop();
        if (visited[v]) continue;
        visited[v] = true;
        result.push(v);
        // 번호가 작은 것부터 방문하려면 역순으로 push
        for (let i = graph[v].length - 1; i >= 0; i--) {
            if (!visited[graph[v][i]]) {
                stack.push(graph[v][i]);
            }
        }
    }
    return result;
}

function bfs(start) {
    const queue = [start];
    const visited = new Array(N + 1).fill(false);
    const result = [];
    visited[start] = true;
    let front = 0;  // queue.shift() 대신 포인터 사용 (성능 향상)

    while (front < queue.length) {
        const v = queue[front++];
        result.push(v);
        for (const next of graph[v]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
    return result;
}

const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M, V] = input.shift().split(' ').map(Number);

const graph = Array.from({length: N + 1}, () => []);
for (let i = 0; i < M; i++) {
    const [a, b] = input.shift().split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

for (let i = 0; i < N + 1; i++) {
    graph[i].sort((a, b) => a - b);
}

console.log(dfs(V).join(' '));
console.log(bfs(V).join(' '));