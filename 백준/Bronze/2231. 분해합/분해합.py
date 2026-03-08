N = int(input())
result = 0

for i in range(1, N + 1):
    sum_of_digits = sum(map(int, str(i)))
    decomposition_sum = i + sum_of_digits
    
    if decomposition_sum == N:
        result = i
        break
    
print(result)
