const N = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i < N + 1; i++) {
    console.log(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}

for (let i = N - 1; i > 0; i--) {
    console.log(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}