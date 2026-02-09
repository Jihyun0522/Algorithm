from collections import Counter

def solution(topping):
    answer = 0
    brother = Counter(topping)
    brother_kind = len(brother)
    
    chulsoo = set()
    
    for t in topping:
        chulsoo.add(t)
        
        brother[t] -= 1
        if brother[t] == 0:
            brother_kind -= 1
            
        if len(chulsoo) == brother_kind:
            answer += 1
            
    return answer