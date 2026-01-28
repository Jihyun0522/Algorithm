def solution(k, m, score):
    answer = 0
    sorted_score = sorted(score, reverse=True)
    
    for i in range(m - 1, len(sorted_score), m):
        p = sorted_score[i]
        answer += p * m
    
    return answer