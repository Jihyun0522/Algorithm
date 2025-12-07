def solution(rsp):
    winning_move = {
        '2' : '0',
        '0' : '5',
        '5' : '2'
    }
    
    return "".join([winning_move[char] for char in rsp])