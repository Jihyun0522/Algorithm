expr = input()
parts = expr.split('-')
result = 0

for i, part in enumerate(parts):
    if i == 0:
        result += sum(map(int, part.split('+')))
    else:
        result -= sum(map(int, part.split('+')))
    
print(result)