function solution(my_string, n) {
    return my_string.split('').map(char => {
        return char.repeat(n);
    }).join('');
}