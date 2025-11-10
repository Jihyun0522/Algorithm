def solution(my_string, m, c):
    answer = ''
    
    for index in range(c - 1, len(my_string), m):
        answer += my_string[index]
    
    return answer