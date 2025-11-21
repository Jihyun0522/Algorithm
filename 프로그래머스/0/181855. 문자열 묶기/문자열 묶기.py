from collections import Counter

def solution(strArr):
    length_list = [len(str) for str in strArr]
    length_counts = Counter(length_list)
    return max(length_counts.values())