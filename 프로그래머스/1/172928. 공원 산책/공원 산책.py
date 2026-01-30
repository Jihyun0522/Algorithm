def solution(park, routes):
    r = 0
    c = 0
    
    H = len(park)
    W = len(park[0])

    for i in range(H):
        for j in range(W):
            if park[i][j] == 'S':
                r, c = i, j
                break
    
    directions = {"N": (-1, 0), "S": (1, 0), "E": (0, 1), "W": (0, -1)}
    
    for route in routes:
        direct, dist = route.split()
        dist = int(dist)
        dr, dc = directions[direct]
        
        is_valid = True
        nr, nc = r, c
        
        for _ in range(dist):
            nr += dr
            nc += dc
            if not (0 <= nr < H and 0 <= nc < W) or park[nr][nc] == 'X':
                is_valid = False
                break
        
        if is_valid:
            r, c = nr, nc
        
    return [r, c]