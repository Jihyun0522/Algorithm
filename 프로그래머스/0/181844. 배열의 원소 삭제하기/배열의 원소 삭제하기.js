function solution(arr, delete_list) {
    const deleteSet = new Set(delete_list);
    
    return arr.filter((num) => !deleteSet.has(num));
}