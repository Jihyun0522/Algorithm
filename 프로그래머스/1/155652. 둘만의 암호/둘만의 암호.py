import string

def solution(s, skip, index):
    answer = ''
    
    alphabet = string.ascii_lowercase
    filtered_alpha = [char for char in alphabet if char not in skip]
    
    for char in s:
        current_idx = filtered_alpha.index(char)
        new_idx = (current_idx + index) % len(filtered_alpha)
        answer += filtered_alpha[new_idx]
    
    return answer