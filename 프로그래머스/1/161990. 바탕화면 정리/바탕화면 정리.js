function solution(wallpaper) {
    let lux = 51;
    let luy = 51;
    let rdx = 0;
    let rdy = 0;
    
    for (let r = 0; r < wallpaper.length; r++) {
        for (let c = 0; c < wallpaper[0].length; c++) {
            if (wallpaper[r][c] === '#') {
                lux = Math.min(lux, r);
                luy = Math.min(luy, c);
                rdx = Math.max(rdx, r + 1);
                rdy = Math.max(rdy, c + 1);
            }
        }
    }
    
    return [lux, luy, rdx, rdy];
}