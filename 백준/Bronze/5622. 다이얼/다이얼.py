dial = [2,2,2, 3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7,7, 8,8,8, 9,9,9,9]

word = input()
total = 0

for ch in word:
    idx = ord(ch) - ord('A')
    total += dial[idx] + 1

print(total)