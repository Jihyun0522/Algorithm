function bfs(start) {
    const dist = new Array(N + 1).fill(-1);
    dist[start] = 0;
    const queue = [start];
    let front = 0;
    
    while (front < queue.length) {
        const v = queue[front++];
        for (const next of graph[v]) {
            if (dist[next] === -1) {
                dist[next] = dist[v] + 1;
                queue.push(next);
            }
        }
    }
    return dist.slice(1).reduce((acc, cur) => acc + cur, 0);
}

const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);
for (let i = 0; i < M; i++) {
    const [a, b] = input.shift().split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let minBacon = Infinity;
let result = 0;

for (let i = 1; i <= N; i++) {
    let bacon = bfs(i);
    
    if (bacon < minBacon) {
        minBacon = bacon;
        result = i;
    }
}

console.log(result);