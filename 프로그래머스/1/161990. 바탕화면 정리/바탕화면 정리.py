def solution(wallpaper):
    lux, luy = 51, 51
    rdx, rdy = 0, 0
    
    for r in range(len(wallpaper)):
        for c in range(len(wallpaper[0])):
            if wallpaper[r][c] == "#":
                lux = min(lux, r)
                luy = min(luy, c)
                rdx = max(rdx, r + 1)
                rdy = max(rdy, c + 1)
                
    return [lux, luy, rdx, rdy]