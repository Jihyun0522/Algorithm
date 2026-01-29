def solution(s):
    answer = 0
    same_count = 0
    diff_count = 0
    target = ""
    
    for char in s:
        if target == "":
            target = char
        
        if target == char:
            same_count += 1
        else:
            diff_count += 1
        
        if same_count == diff_count:
            answer += 1
            same_count = 0
            diff_count = 0
            target = ""
    
    if same_count > 0:
        answer += 1
    
    return answer