function solution(intStrs, k, s, l) {
     return intStrs.map(strNum => {
        return parseInt(strNum.slice(s, s + l));
    }).filter(num => num > k);;
}