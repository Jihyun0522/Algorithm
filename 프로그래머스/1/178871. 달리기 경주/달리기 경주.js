function solution(players, callings) {
    const playerMap = {};

    for (let i = 0; i < players.length; i++) {
      playerMap[players[i]] = i;
    }
    
    for (let calling of callings) {
        const curIdx = playerMap[calling];
        const frontPlayer = players[curIdx - 1];

        players[curIdx - 1] = calling;
        players[curIdx] = frontPlayer;

        playerMap[calling] = curIdx - 1;
        playerMap[frontPlayer] = curIdx;
    }
    
    return players;
}