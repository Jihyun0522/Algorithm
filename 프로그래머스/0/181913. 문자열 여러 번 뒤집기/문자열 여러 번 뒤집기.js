function solution(my_string, queries) {
    const myList = my_string.split('');
    
    for (const [s, e] of queries) {
        const reversedArr = myList.slice(s, e + 1).reverse();
        myList.splice(s, e - s + 1, ...reversedArr);
    }
    
    return myList.join('');
}