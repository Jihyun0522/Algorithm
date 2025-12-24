const WORDS = [ "aya", "ye", "woo", "ma"];

function solution(babbling) {
    let count = 0;
    
    for (b of babbling) {
        for (w of WORDS) {
            b = b.replace(w, " ");
        }
        
        if (b.trim() === "") {
            count += 1;
        }
    }
    
    return count;    
}