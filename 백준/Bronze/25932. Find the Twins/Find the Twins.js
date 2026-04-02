const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());

for (let i of input) {
    const nums = i.split(' ').map(Number);
    
    console.log(nums.join(' '));
    if (nums.includes(18) && nums.includes(17)) {
        console.log('both');
    } else if (nums.includes(18)) {
        console.log('mack');
    } else if (nums.includes(17)) {
        console.log('zack');
    } else {
        console.log('none');
    }
    console.log();
}