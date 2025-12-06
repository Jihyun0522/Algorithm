function solution(age) {
    const charCodeA = 'a'.charCodeAt(0);
    return String(age).split("").map(char => {
        const num = parseInt(char);
        return String.fromCharCode(charCodeA + num);
    }).join('');
}