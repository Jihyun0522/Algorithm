const input = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(Number);
const N = input.shift();
const M = input.shift();
const B = input.shift();
const blocks = input;

let minTime = Infinity;
let result = 0;
const minH = Math.min(...blocks);
const maxH = Math.max(...blocks);

for (let h = minH; h <= maxH; h++) {
    let remove = 0;
    let add = 0;
    
    for (const block of blocks) {
        if (block > h) {
            remove += block - h;
        } else if (block < h) {
            add += h - block;
        }
    }
    
    if ((B + remove) >= add) {
        const time = remove * 2 + add;
        if (time < minTime) {
            minTime = time;
            result = h;
        } else if (time === minTime) {
            result = h;
        }
    }
}

console.log(minTime, result);