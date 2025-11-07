function solution(my_string, index_list) {
    let answer = [];
    let strArr = my_string.split("");
    
    for (let index of index_list) {
      answer.push(strArr[index])  
    }
    
    return answer.join('');
}