const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const matrixA = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
const matrixB = input.slice(N + 1).map(line => line.split(' ').map(Number));

for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < M; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
    }
    console.log(row.join(' '));
}