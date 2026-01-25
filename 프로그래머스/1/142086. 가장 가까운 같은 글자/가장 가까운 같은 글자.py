def solution(s):
    answer = []
    last_pos = {}
    
    for i, char in enumerate(s):
        if char in last_pos:
            answer.append(i - last_pos[char])
        else:
            answer.append(-1)
            
        last_pos[char] = i
        
    return answer