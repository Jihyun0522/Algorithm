def solution(score):
    sums = [s[0] + s[1] for s in score]
    sortSums = sorted(sums, reverse=True)
    
    return [sortSums.index(i) + 1 for i in sums]