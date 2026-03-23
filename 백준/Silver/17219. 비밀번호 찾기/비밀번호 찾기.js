const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const passwords = new Map();

for (let i = 1; i <= N; i++) {
    let [site, password] = input[i].split(' ');
    passwords.set(site, password);
}

const result = [];
for (let i = N + 1; i <= N + M; i++) {
    let query = input[i];
    result.push(passwords.get(query));
}

console.log(result.join('\n'));