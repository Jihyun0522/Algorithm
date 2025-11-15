function solution(arr) {
    for (const i in arr) {
        const num = arr[i];
        
        if (num >= 50 && num % 2 == 0) {
            arr[i] = num / 2;
        } else if (num < 50 && num % 2 != 0) {
            arr[i] = num * 2;
        }
    }
    return arr;
}