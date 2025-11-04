function solution(code) {
    const joinedStr = code.split("1").join('');

    let result = "";
    for (let i = 0; i < joinedStr.length; i += 2) {
        result += joinedStr[i];
    }

    return result === "" ? "EMPTY" : result;
}