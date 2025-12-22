function solution(spell, dic) {
    const target = spell.sort().join("");
    
    const exists = dic.some(word => {
        return word.split('').sort().join("") === target;
    });
    
    return exists ? 1 : 2;
}