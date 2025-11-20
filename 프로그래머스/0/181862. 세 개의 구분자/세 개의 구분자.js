function solution(myStr) {
    const list = myStr.split(/[a|b|c]/).filter(str => str);
    return list.length ? list : ["EMPTY"];
}