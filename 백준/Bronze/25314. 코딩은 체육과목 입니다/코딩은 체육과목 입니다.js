const input = require('fs').readFileSync(0).toString().trim();
const N = parseInt(input);
console.log("long ".repeat(N / 4) + "int");