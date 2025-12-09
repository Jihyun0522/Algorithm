function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const leng = numbers.length;
    return numbers[leng - 1] * numbers[leng - 2];
}