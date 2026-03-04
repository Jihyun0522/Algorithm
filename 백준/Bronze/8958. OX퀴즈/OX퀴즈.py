T = int(input())

for _ in range(T):
    ox_string = input()
    total_score = 0
    current_score = 0
    
    for char in ox_string:
        if char == 'O':
            current_score += 1
            total_score += current_score
        else:
            current_score = 0
            
    print(total_score)