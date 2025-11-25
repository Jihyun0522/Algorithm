function solution(order) {
    var answer = 0;
    
    for (const menu of order) {
        if (menu.includes("cafelatte")) {
            answer += 5000;
        } else {
            answer += 4500;
        }
    }
    
    return answer;
}