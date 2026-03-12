const input = require('fs').readFileSync(0).toString();

if (input.trim() === "") {
    console.log(0);
} else {
    const lines = input.trim().split('\n');
    console.log(lines.length);
}