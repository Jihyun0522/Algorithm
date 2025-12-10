def solution(n):
    prime_factors = set()
    i = 2
    
    while i * i <= n:
        if n % i == 0:
            prime_factors.add(i)
            n //= i 
        else:
            i += 1
            
    if n > 1:
        prime_factors.add(n)
        
    return sorted(list(prime_factors))