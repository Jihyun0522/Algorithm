const PATTERNS = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
];

function solution(answers) {
    const scores = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        const currentAnswer = answers[i];

        if (currentAnswer === PATTERNS[0][i % PATTERNS[0].length]) {
            scores[0]++;
        }
        if (currentAnswer === PATTERNS[1][i % PATTERNS[1].length]) {
            scores[1]++;
        }
        if (currentAnswer === PATTERNS[2][i % PATTERNS[2].length]) {
            scores[2]++;
        }
    }
    
    const maxScore = Math.max(...scores);
    const result = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) result.push(i + 1);
    }

    return result;
}