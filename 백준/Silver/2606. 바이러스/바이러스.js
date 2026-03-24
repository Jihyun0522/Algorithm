const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
const E = Number(input.shift());

const graph = Array.from({length: N + 1}, () => []);
for (let i = 0; i < E; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b)
    graph[b].push(a)
}

const visited = new Array(N + 1).fill(false);
visited[1] = true

const queue = [1];
let count = 0;

while (queue.length > 0) {
    const node = queue.shift();
    for (let next of graph[node]) {
        if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
            count++;
        }
    }
}

console.log(count);