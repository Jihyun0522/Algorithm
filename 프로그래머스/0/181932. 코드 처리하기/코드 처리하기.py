def solution(code):
    answer = ''
    mode = 0
    
    for idx in range(len(code)):
        char = code[idx]
        
        if mode == 0:
            if char == "1":
                mode = 1
            elif idx % 2 == 0:
                answer += char
        else:
            if char == "1":
                mode = 0
            elif idx % 2 == 1:
                answer += char
    
    return answer if answer != '' else 'EMPTY'