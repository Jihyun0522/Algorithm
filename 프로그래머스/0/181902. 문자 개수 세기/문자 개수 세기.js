function solution(my_string) {
    const counts = new Map();
    for (const char of my_string) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    const answer = [];

    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        const char = String.fromCharCode(i);
        answer.push(counts.get(char) || 0);
    }
    
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        const char = String.fromCharCode(i);
        answer.push(counts.get(char) || 0);
    }

    return answer;
}