N = int(input())

count = 1
last_num = 1

while N > last_num:
    last_num += 6 * count
    count += 1
    
print(count)