from collections import Counter

def solution(s):
    count = Counter(s)
    result = [char for char, c in count.items() if c == 1]
    return "".join(sorted(result))