def solution(ineq, eq, n, m):
    answer = 1
    if eq == '!':
        if ineq == '<':
            answer = n < m
        else: 
            answer = n > m
    else:
        if ineq == '<':
            answer = n <= m
        else: 
            answer = n >= m
    return int(answer)