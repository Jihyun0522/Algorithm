special = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
s = input()
count = 0
i = 0

while i < len(s):
    matched = False
    for sp in special:
        if s[i:i+len(sp)] == sp:
            count += 1
            i += len(sp)
            matched = True
            break
    if not matched:
        count += 1
        i += 1

print(count)