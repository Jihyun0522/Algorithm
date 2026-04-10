import sys
input = sys.stdin.readline

wins = {'S': 'P', 'P': 'R', 'R': 'S'}

def score(sanggeun, friend):
    if sanggeun == friend:
        return 1
    elif wins[sanggeun] == friend:
        return 2
    else:
        return 0

R = int(input())
sanggeun = list(input().strip())
N = int(input())
friends = [list(input().strip()) for _ in range(N)]

real_score = 0
max_score = 0

for r in range(R):
    for n in range(N):
        real_score += score(sanggeun[r], friends[n][r])
    
    best = 0
    for choice in ['S', 'P', 'R']:
        round_score = sum(score(choice, friends[n][r]) for n in range(N))
        best = max(best, round_score)
    max_score += best

print(real_score)
print(max_score)