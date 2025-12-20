function solution(my_str, n) {
    var result = [];
    
    for (let i = 0; i < my_str.length; i += n) {
        const chunk = my_str.slice(i, i + n);
        result.push(chunk);
    }
    
    return result;
}