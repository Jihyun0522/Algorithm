const input = require('fs').readFileSync(0).toString().trim();
console.log(input === "" ? 0 : input.split(' ').length);