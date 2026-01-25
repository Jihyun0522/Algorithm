function solution(s, n) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === " ") {
            answer += " ";
            continue;
        }

        const code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            answer += String.fromCharCode(((code - 65 + n) % 26) + 65);
        } else {
            answer += String.fromCharCode(((code - 97 + n) % 26) + 97)
        }
    }
    return answer;
}