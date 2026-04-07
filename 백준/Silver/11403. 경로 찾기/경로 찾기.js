const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
const graph = [];
for (let i = 0; i < N; i++) {
    graph.push(input[i].split(' ').map(Number));
}

for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][k] === 1 && graph[k][j] === 1) {
                graph[i][j] = 1;
            }
        }
    }
}

for (let row of graph) {
    console.log(row.join(' '));
}