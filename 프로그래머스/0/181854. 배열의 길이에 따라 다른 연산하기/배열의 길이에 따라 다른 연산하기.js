function solution(arr, n) {
    const L = arr.length;
    const isOddLength = L % 2 !== 0;

    return arr.map((val, i) => {
        const condition = (isOddLength && i % 2 == 0) || (!isOddLength && i % 2 != 0);
        return condition ? val + n : val;
    });
}