function solution(bandage, health, attacks) {
    let answer = health;
    
    let time = 1;
    let skill = 0;
    
    while (attacks.length > 0) {
        if (time === attacks[0][0]) {
            answer -= attacks[0][1];
            skill = 0;
            attacks.shift();
            
            if (answer <= 0) {
                return -1;
            }
        } else {
            answer += bandage[1];
            if (answer > health) {
                answer = health;
            }
            
            skill += 1;
            
            if (skill === bandage[0]) {
                answer += bandage[2];
                if (answer > health) {
                    answer = health;
                }
                skill = 0;
            }
        }
        time += 1;
    }
    
    return answer;
}