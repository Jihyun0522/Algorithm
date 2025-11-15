function solution(num_list) {
    return num_list.length < 11 ? num_list.reduce((acc, curr) => acc * curr, 1) : num_list.reduce((acc, curr) => acc + curr, 0);
}