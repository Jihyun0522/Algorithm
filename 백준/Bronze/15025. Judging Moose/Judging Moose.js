const [left, right] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
if (left === right) {
    if (left === 0) {
        console.log('Not a moose');
    } else {
        console.log(`Even ${left + right}`);
    }
} else {
    console.log(`Odd ${Math.max(left, right) * 2}`);
}