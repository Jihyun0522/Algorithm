const CAN_SPEAK = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    let count = 0;
    
    for (let word of babbling) {
        let isValid = true;
        
        for (let sound of CAN_SPEAK) {
            if (word.includes(sound.repeat(2))) {
                isValid = false;
                break;
            }
            word = word.replaceAll(sound, " ");
        }
        
        if (isValid && word.trim() === "") {
            count++;
        }
    }
    
    return count;
}