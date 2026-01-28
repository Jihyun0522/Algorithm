def solution(babbling):
    count = 0
    
    can_speak = ["aya", "ye", "woo", "ma"]
    
    for word in babbling:
        is_valid = True
        for sound in can_speak:
            if (sound * 2) in word:
                is_valid = False
                break
            word = word.replace(sound, " ")
        
        if is_valid and word.strip() == "":
            count += 1
    
    return count