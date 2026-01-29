def solution(keymap, targets):
    answer = []
    min_press = {}
    
    for kmap in keymap:
        for idx, char in enumerate(kmap):
            press_count = idx + 1

            if char in min_press:
                min_press[char] = min(min_press[char], press_count)
            else:
                min_press[char] = press_count
    
    for target in targets:
        total_press = 0
        possible = True
        
        for char in target:
            if char in min_press:
                total_press += min_press[char]
            else:
                possible = False
                break
        
        if possible:
            answer.append(total_press)
        else:
            answer.append(-1)
    
    return answer