function solution(keyinput, board) {
    let result = [0, 0];
    const max_x = (board[0] - 1) / 2;
    const max_y = (board[1] - 1) / 2;
    
    for (key of keyinput) {
        if (key === "left" && result[0] > -max_x) {
            result[0] -= 1;
        } else if (key === "right" && result[0] < max_x) {
            result[0] += 1;
        } else if (key === "down" && result[1] > -max_y) {
            result[1] -= 1;
        } else if (key === "up" && result[1] < max_y) {
            result[1] += 1;
        }
    }
    
    return result;
}