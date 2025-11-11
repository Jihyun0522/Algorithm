from collections import Counter

def solution(my_string):
    counts = Counter(my_string)
    answer = []
    
    for i in range(ord('A'), ord('Z') + 1):
        char = chr(i)
        answer.append(counts.get(char, 0))

    
    for i in range(ord('a'), ord('z') + 1):
        char = chr(i)
        answer.append(counts.get(char, 0))
        
    return answer