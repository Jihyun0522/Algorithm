ascending = [1, 2, 3, 4, 5, 6, 7, 8]

data = list(map(int, input().split()))

if data == ascending:
    print("ascending")
elif data == ascending[::-1]:
    print("descending")
else:
    print("mixed")