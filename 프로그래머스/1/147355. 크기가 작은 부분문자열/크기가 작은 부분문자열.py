def solution(t, p):
    answer = 0
    p_len = len(p)
    p_val = int(p)
    
    for i in range(len(t) - p_len + 1):
        sub_val = int(t[i : i + p_len])
        
        if sub_val <= p_val:
            answer += 1
            
    return answer