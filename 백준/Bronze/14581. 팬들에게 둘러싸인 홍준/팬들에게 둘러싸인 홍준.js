const id = require('fs').readFileSync(0).toString().trim();
console.log(":fan:".repeat(3));
console.log(`:fan::${id}::fan:`);
console.log(":fan:".repeat(3));