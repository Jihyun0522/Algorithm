function solution(strArr) {
    return strArr.filter(s => {
        return !s.includes("ad");
    });
}