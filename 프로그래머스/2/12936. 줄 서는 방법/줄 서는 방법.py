import math

def solution(n, k):
    answer = []
    numbers = [i for i in range(1, n + 1)]
    
    k -= 1
    
    while n > 0:
        total_case = math.factorial(n - 1)
        
        index = k // total_case
        
        answer.append(numbers.pop(index))
        
        k %= total_case
        n -= 1
        
    return answer