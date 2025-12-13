function solution(my_string) {
    return my_string.split('').map(char => {
        if (char === char.toUpperCase()) return char.toLowerCase();
        else return char.toUpperCase();
    }).join('');
}