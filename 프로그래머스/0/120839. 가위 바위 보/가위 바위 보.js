const WINNING_MOVE = {
    '2' : '0',
    '0' : '5',
    '5' : '2'
}

function solution(rsp) {
    return rsp.split('')
              .map(char => WINNING_MOVE[char])
              .join('');
}