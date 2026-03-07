const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const boxes = input[1].split(' ').map(Number);
const books = input[2].split(' ').map(Number);

let boxIdx = 0;
let bookIdx = 0;

while (boxIdx < N && bookIdx < M) {
    if (boxes[boxIdx] >= books[bookIdx]) {
        boxes[boxIdx] -= books[bookIdx];
        bookIdx++;
    } else {
        boxIdx++;
    }
}

console.log(boxes.reduce((acc, cur) => acc + cur, 0));