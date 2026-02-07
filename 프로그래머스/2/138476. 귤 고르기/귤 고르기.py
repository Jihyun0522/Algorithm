from collections import Counter

def solution(k, tangerine):
    counts = Counter(tangerine)
    
    sorted_counts = sorted(counts.values(), reverse=True)
    
    answer = 0
    total = 0
    
    for count in sorted_counts:
        total += count
        answer += 1
        
        if total >= k :
            return answer        
