const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function solution(s, skip, index) {
    let answer = '';
    
    const validAlphabet = ALPHABET.split("").filter(char => !skip.includes(char));
    
    for (let char of s) {
        const currentIdx = validAlphabet.indexOf(char);
        const newIdx = (currentIdx + index) % validAlphabet.length;
        answer += validAlphabet[newIdx];
    }
    
    return answer;
}