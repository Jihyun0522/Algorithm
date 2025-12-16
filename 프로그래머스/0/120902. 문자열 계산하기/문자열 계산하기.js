function solution(my_string) {
    const elements = my_string.split(' ');
    let result = parseInt(elements[0]);
    
    for (let i = 1; i < elements.length; i += 2) {
        operator = elements[i];
        operand = parseInt(elements[i + 1]);
        
        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        }
    }
        
    return result;
}