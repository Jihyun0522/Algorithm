function solution(num_list) {
    const sum = num_list.reduce((acc, curr) => acc + curr, 0);
    const prod = num_list.reduce((acc, curr) => acc * curr, 1);
    
    return prod > sum ** 2 ? 0 : 1;
}