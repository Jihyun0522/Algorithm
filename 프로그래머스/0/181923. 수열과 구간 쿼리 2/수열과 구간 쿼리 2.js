function solution(arr, queries) {
    const answer = [];

    for (const [s, e, k] of queries) {
        const tmp = arr.slice(s, e + 1).filter(x => x > k);

        if (tmp.length === 0) {
            answer.push(-1);
        } else {
            answer.push(Math.min(...tmp));
        }
    }

    return answer;
}