def solution(intStrs, k, s, l):
    answer = []
    
    for str_num in intStrs:
        intStr = int(str_num[s : s + l])
        
        if intStr > k:
            answer.append(intStr)
            
    return answer