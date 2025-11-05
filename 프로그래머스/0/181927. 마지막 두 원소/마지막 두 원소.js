function solution(num_list) {
    const leng = num_list.length;
    const num1 = num_list[leng - 1];
    const num2 = num_list[leng - 2];
    num_list.push(num1 > num2 ? num1 - num2 : num1 * 2);
    return num_list;
}