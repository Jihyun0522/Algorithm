import sys
input = sys.stdin.readline

def solve(x, y, size):
    global white, blue
    color = paper[x][y]
    all_same = True
    for i in range(x, x + size):
        for j in range(y, y + size):
            if paper[i][j] != color:
                all_same = False
                break
    
    if all_same:
        if color == 0:
            white += 1
        else:
            blue += 1
        return
    
    half = size // 2
    solve(x, y, half)
    solve(x + half, y, half)
    solve(x, y + half, half)
    solve(x + half, y + half, half)

N = int(input())
paper = [list(map(int, input().split())) for _ in range(N)]
white, blue = 0, 0
solve(0, 0, N)
print(white)
print(blue)