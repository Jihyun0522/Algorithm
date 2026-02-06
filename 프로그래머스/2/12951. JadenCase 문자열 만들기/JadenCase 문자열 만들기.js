function solution(s) {
    let words = s.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() 
            + words[i].substring(1).toLowerCase();
    }
    return words.join(' ');
}