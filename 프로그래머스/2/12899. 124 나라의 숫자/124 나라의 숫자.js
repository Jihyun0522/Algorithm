const NUMBERS = ['4', '1', '2'];

function solution(n) {
    let answer = '';
    
    while (n > 0) {
        const remainder = n % 3;
        n = Math.floor(n / 3);
        
        if (remainder === 0) {
            n = n - 1;
        }
        
        answer = NUMBERS[remainder] + answer;
    }
    
    return answer;
}