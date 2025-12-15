function solution(my_string, num1, num2) {
    const myList = my_string.split('');
    [myList[num1], myList[num2]] = [myList[num2], myList[num1]];
    return myList.join('');
}