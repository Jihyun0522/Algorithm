from collections import Counter

def solution(want, number, discount):
    want_dict = {w: n for w, n in zip(want, number)}
    answer = 0

    for i in range(len(discount) - 9):
        current_10_days = Counter(discount[i : i + 10])
        
        if current_10_days == want_dict:
            answer += 1
            
    return answer