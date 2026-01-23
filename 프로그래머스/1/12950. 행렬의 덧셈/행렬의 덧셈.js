function solution(arr1, arr2) {
    return arr1.map((row, i) => {
        return row.map((val, j) => {
            return val + arr2[i][j];
        });
    });
}