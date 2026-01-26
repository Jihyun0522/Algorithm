def solution(k, score):
    answer = []
    hall_of_fame = []
    
    for s in score:
        hall_of_fame.append(s)
        
        hall_of_fame.sort(reverse=True)
        
        if len(hall_of_fame) > k:
            hall_of_fame.pop()
            
        answer.append(hall_of_fame[-1])
        
    return answer