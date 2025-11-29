from collections import Counter

def solution(array):
    counts = Counter(array).most_common()
    
    if not counts:
        return -1 
    
    max_count = counts[0][1]
    
    if len(counts) > 1 and counts[1][1] == max_count:
        return -1
    else:
        return counts[0][0]