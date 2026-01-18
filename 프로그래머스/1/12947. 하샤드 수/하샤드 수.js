function solution(x) {
    const sum = String(x)
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0);
    return x % sum === 0;
}