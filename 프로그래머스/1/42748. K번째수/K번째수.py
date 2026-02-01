def solution(array, commands):
    answer = []
    
    for command in commands:
        i, j, k = command
        array_temp = array[i - 1:j]
        answer.append(sorted(array_temp)[k - 1])
    
    return answer