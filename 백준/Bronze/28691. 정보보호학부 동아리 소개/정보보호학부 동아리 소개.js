const clubs = { "M": "MatKor", "W": "WiCys", "C": "CyKor", "A" : "AlKor", "$": "$clear"};
const input = require('fs').readFileSync(0).toString().trim();

console.log(clubs[input]);