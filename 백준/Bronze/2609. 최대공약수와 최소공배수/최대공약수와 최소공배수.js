const input = require('fs').readFileSync(0).toString().trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

const gcd = (n, m) => (m === 0 ? n : gcd(m, n % m));
const lcm = (n, m) => (n * m) / gcd(n, m);

console.log(gcd(a, b));
console.log(lcm(a, b));