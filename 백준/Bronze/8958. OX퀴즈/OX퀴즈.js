const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(lines[0]);

for (let i = 1; i <= N; i++) {
    const oxString = lines[i];
    let totalScore = 0;
    let currentScore = 0;
    
    for (let char of oxString) {
        if (char === 'O') {
            currentScore += 1;
            totalScore += currentScore;
        } else {
            currentScore = 0;
        }
    }
    
    console.log(totalScore);
}