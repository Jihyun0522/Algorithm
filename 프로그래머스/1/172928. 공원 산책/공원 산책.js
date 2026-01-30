const MOVES = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

function solution(park, routes) {
    let curR = 0;
    let curC = 0;
    const H = park.length;
    const W = park[0].length;

    for (let r = 0; r < H; r++) {
        if (park[r].includes('S')) {
            curR = r;
            curC = park[r].indexOf('S');
            break;
        }
    }
    
    for (const route of routes) {
        const [dir, distance] = route.split(" ");
        let [nr, nc] = [curR, curC];
        let isValid = true;

        for (let i = 0; i < Number(distance); i++) {
            nr += MOVES[dir][0];
            nc += MOVES[dir][1];

            if (nr < 0 || nr >= H || nc < 0 || nc >= W || park[nr][nc] === 'X') {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            curR = nr;
            curC = nc;
        }
    }

    return [curR, curC];
}