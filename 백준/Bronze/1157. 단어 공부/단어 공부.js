const s = require('fs').readFileSync(0).toString().trim().toUpperCase();
const count = new Map();
for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1);
}
const maxCount = Math.max(...count.values());
const result = [...count.entries()].filter(([k, v]) => v === maxCount).map(([k]) => k);
console.log(result.length === 1 ? result[0] : '?');