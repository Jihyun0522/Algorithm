function solution(topping) {
    var answer = 0;
    
    let brother = new Map();
    for (const item of topping) {
        brother.set(item, (brother.get(item) || 0) + 1);
    }
    let brotherCount = brother.size;
    
    let chulsoo = new Map();
    
    for (let t of topping) {
        chulsoo.set(t, (chulsoo.get(t) || 0) + 1);
        
        brother.set(t, (brother.get(t) || 0) - 1);
        if (brother.get(t) === 0) {
            brotherCount -= 1;
        }
        
        if (chulsoo.size === brotherCount) {
            answer++;
        }
    }
    
    return answer;
}