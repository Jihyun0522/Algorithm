def solution(d, budget):
    answer = 0
    d.sort()
    
    for amount in d:
        if budget >= amount:
            budget -= amount
            answer += 1
        else:
            break
            
    return answer