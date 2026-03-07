const input = require('fs').readFileSync(0).toString().trim().split('\n');

for (let line of input) {
    const nums = line.split(' ').map(Number);
    nums.sort((a, b) => a - b);
    
    if (nums[0] === 0 && nums[1] === 0 && nums[2] === 0) {
        break;
    }
    
    console.log(nums[0]*nums[0] + nums[1]*nums[1] === nums[2]*nums[2] ? 'right' : 'wrong');
}