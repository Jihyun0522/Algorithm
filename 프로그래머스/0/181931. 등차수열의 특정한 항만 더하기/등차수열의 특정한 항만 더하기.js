function solution(a, d, included) {
    let answer = 0;
    
    for (i = 0; i < included.length; i++) {
        answer += included[i] ? a + i * d : 0;
    }
    
    return answer;
}