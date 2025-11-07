function solution(number) {
    let sum = 0;
    for (const char of number) {
        sum += parseInt(char);
    }
    return sum % 9
}