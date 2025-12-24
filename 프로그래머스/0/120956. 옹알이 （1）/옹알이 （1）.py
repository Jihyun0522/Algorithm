def solution(babbling):
    count = 0
    words = ["aya", "ye", "woo", "ma"]
    
    for b in babbling:
        for w in words:
            b = b.replace(w, " ")
        
        if b.strip() == "":
            count += 1
            
    return count;