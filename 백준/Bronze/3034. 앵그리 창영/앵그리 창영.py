N, W, H = map(int, input().split())

max_sq = W**2 + H**2

for _ in range(N):
    match_len = int(input())
    if match_len**2 <= max_sq:
        print("DA")
    else:
        print("NE")