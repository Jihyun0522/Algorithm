def solution(quiz):
    answer = []
    
    for q in quiz:
        x, op, y, _, z = q.split(' ');
        res = int(x) + int(y) if op == '+' else int(x) - int(y)
        answer.append("O" if res == int(z) else "X")
    
    return answer