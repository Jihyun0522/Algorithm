N, M = map(int, input().split())
boxes = list(map(int, input().split()))
books = list(map(int, input().split()))

box_idx = 0
book_idx = 0

while box_idx < N and book_idx < M:
    if boxes[box_idx] >= books[book_idx]:
        boxes[box_idx] -= books[book_idx]
        book_idx += 1
    else:
        box_idx += 1

print(sum(boxes))