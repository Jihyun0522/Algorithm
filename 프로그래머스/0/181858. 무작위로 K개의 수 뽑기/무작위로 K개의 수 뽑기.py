def solution(arr, k):
    result = []
    seen = set()
    
    for num in arr:
        if num not in seen:
            result.append(num)
            seen.add(num)
            
            if len(result) == k:
                break
    
    if len(result) < k:
        needed_count = k - len(result)
        result.extend([-1] * needed_count)
        
    return result