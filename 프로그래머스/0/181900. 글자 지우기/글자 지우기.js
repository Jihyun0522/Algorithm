function solution(my_string, indices) {
    const indexSet = new Set(indices);
    const my_list = my_string.split('');
    const result = my_list.filter((char, i) => {
        return !indexSet.has(i);
    }).join('');
    
    return result;
}