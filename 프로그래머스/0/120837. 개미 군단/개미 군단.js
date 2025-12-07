function solution(hp) {
    let ant = [5,3,1];
    let cnt = 0;

    ant.forEach(p => {
        cnt += Math.floor(hp / p);
        hp = hp % p;
    })

    return cnt;
}