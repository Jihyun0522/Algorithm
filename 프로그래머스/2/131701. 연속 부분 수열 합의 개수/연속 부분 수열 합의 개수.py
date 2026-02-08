def solution(elements):
    n = len(elements)
    result = set()
    
    extended_elements = elements * 2
    
    for length in range(1, n + 1):
        for start in range(n):
            s = sum(extended_elements[start : start + length])
            result.add(s)
            
    return len(result)