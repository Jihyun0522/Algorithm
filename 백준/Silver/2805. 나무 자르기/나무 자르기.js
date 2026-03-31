const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const trees = input.shift().split(' ').map(Number);

let start = 0;
let end = Math.max(...trees);

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    
    for (let tree of trees) {
        if (tree > mid) {
            count += tree - mid;
        }
        if (count >= M) {
            break;
        }
    }
    
    if (count >= M) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(end);