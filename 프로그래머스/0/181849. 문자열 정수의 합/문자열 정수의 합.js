function solution(num_str) {
    return num_str.split('').reduce((acc, char) => {
        return acc + Math.trunc(char);
    }, 0);
}