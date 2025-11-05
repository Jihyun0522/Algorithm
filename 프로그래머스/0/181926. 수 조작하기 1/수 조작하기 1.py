changes = {
    "w": 1,
    "s": -1,
    "d": +10,
    "a": -10
}

def solution(n, control):
    answer = n
    for char in control:
        answer += changes[char]
    return answer