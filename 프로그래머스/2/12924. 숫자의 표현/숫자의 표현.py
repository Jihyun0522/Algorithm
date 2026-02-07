def solution(n):
    count = 0;
    
    for i in range(1, n + 1):
        if n % i == 0 and i % 2 == 1:
            count += 1
            
    return count