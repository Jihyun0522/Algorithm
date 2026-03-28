s = list(input())
key = list(input())

if len(s) > len(key):
    for i in range(len(s) - len(key)):
        key.append(key[i])

for i in range(len(s)):
    if s[i] == " ":
        s[i] = " "
    elif ord(key[i]) < ord(s[i]):
        x = ord(key[i]) - 96
        s[i] = chr(ord(s[i]) - x)
    else:
        x = 122 - ord(key[i]) + ord(s[i])
        s[i] = chr(x)

print(''.join(s))