def solution(a, d, included):
    answer = 0
    
    for i, is_included in enumerate(included):
        answer += a + i * d if is_included else 0
    
    return answer