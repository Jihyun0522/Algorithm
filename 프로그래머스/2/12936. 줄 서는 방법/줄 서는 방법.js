function solution(n, k) {
    const answer = [];
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    
    let factorial = 1;
    for (let i = 1; i < n; i++) factorial *= i;

    k--;

    while (numbers.length > 0) {
        const index = Math.floor(k / factorial);
        answer.push(numbers[index]);
        
        numbers.splice(index, 1);

        if (numbers.length > 0) {
            k %= factorial;
            factorial /= numbers.length;
        }
    }

    return answer;
}