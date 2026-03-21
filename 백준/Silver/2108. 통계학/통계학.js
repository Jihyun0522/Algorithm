const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const nums = input.slice(1).map(Number);
nums.sort((a, b) => a - b);

const sum = nums.reduce((acc, cur) => acc + cur, 0);

const counter = {};
for (const num of nums) {
    counter[num] = (counter[num] || 0) + 1;
}

const maxCount = Math.max(...Object.values(counter));
const modes = Object.keys(counter)
    .filter(k => counter[k] === maxCount)
    .map(Number)
    .sort((a, b) => a - b);

console.log(Math.floor(sum / N + 0.5));
console.log(nums[Math.floor(N / 2)]);
console.log(modes.length > 1 ? modes[1] : modes[0]);
console.log(nums[N - 1] - nums[0]);