def solution(my_strings, parts):
    answer = ''
    
    for my_string, part in zip(my_strings, parts):
        s = part[0]
        l = part[1]
        answer += my_string[s : l + 1]
    
    return answer