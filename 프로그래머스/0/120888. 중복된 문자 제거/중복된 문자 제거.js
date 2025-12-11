function solution(my_string) {
    const charArr = my_string.split('');
    const uniqueSet = new Set(charArr);
    const uniqueArr = [...uniqueSet];
    return uniqueArr.join('');
}