def solution(n):
    fact = 1
    i = 1
    
    while True:
        next = i + 1
        
        if fact * next > n:
            return i
        
        fact *= next
        i = next
        
        if fact == n:
            return i
    
