def solution(s):
    s_list = s.split(" ")
    total = 0
    last = 0
    
    for char in s_list:
        if char == 'Z':
            total -= last
            last = 0
        else:
            total += int(char)
            last = int(char)
    
    return total