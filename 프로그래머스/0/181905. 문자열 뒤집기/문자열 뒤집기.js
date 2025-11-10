function solution(my_string, s, e) {
    const myList = my_string.split('');
    const reversedArr = myList.slice(s, e + 1).reverse();
    myList.splice(s, e - s + 1, ...reversedArr);
    
    return myList.join('');
}