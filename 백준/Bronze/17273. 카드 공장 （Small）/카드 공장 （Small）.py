import sys
input = sys.stdin.readline

N, M = map(int, input().split())
cards = []
for _ in range(N):
    a, b = map(int, input().split())
    cards.append([a, b])
    
current = [card[0] for card in cards]

for _ in range(M):
    K = int(input())
    for i in range(N):
        if current[i] <= K:
            if current[i] == cards[i][0]:
                current[i] = cards[i][1]
            else:
                current[i] = cards[i][0]

print(sum(current))