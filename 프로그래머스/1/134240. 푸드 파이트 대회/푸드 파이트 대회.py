def solution(food):
    left = []
    for f in range(1, len(food)):
        left.append(str(f) * (food[f] // 2))
    return ''.join(left) + '0' + ''.join(left[::-1])