function solution(my_string) {
    return my_string.split('')
                    .filter(char => char.match(/\d/))
                    .map(char => parseInt(char))
                    .sort((a, b) => a - b);
}