const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const n = Number(input.shift());  // 각 테스트케이스의 n
    const counter = new Map();
    
    for (let j = 0; j < n; j++) {
        const [name, category] = input.shift().split(' ');
        counter.set(category, (counter.get(category) || 0) + 1);
    }
    
    let result = 1;
    for (const count of counter.values()) {
        result *= (count + 1);
    }
    console.log(result - 1);
}