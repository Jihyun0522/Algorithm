changes = {
    1: "w",
    -1: "s",
    10: "d",
    -10: "a"
}

def solution(numLog):
    answer = ''
    for i in range(len(numLog) - 1):
        answer += changes[numLog[i+1] - numLog[i]]
    return answer