const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const points = input.map(line => {
    const [x, y] = line.split(/\s+/).map(Number);
    return {x, y};
});
points.sort((a, b) => (a.y - b.y) || (a.x - b.x));

console.log(points.map(p => `${p.x} ${p.y}`).join('\n'));