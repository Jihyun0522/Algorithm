def solution(arr, queries):
    results = []
    
    for s, e, k in queries:
        min_val = float('inf') 
        
        for i in range(s, e + 1):
            current_value = arr[i]
            
            if current_value > k and current_value < min_val:
                min_val = current_value
                
        if min_val == float('inf'):
            results.append(-1)
        else:
            results.append(min_val)
            
    return results