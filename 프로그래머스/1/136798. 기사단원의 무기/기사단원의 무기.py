def solution(number, limit, power):
    answer = 0
    
    for num in range(1, number + 1):
        count = 0
        for n in range(1, int(num ** 0.5) + 1):
            if n * n == num:
                count += 1
            elif num % n == 0:
                count += 2
        if count <= limit:
            answer += count
        else:
            answer += power
        
    
    return answer