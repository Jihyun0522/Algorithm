function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}