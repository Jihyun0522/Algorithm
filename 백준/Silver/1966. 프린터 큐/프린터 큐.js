const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let numTestCases = Number(input.shift());

for (let i = 0; i < numTestCases; i++) {
    const [N, M] = input.shift().split(' ').map(Number);
    const priorities = input.shift().split(' ').map(Number);
    
    let queue = priorities.map((priority, index) => {
        return { priority, index };
    });

    let count = 0;
    while (queue.length > 0) {
        const maxP = Math.max(...queue.map(x => x.priority));
        const current = queue.shift();
        if (current.priority < maxP) {
            queue.push(current);
        } else {
            count++;
            if (current.index === M) {
                console.log(count);
                break;
            }
        }
    }
}