days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

def is_leap(y):
    return (y % 4 == 0 and y % 100 != 0) or y % 400 == 0

T = int(input())
for _ in range(T):
    y, m = map(int, input().split())
    
    prev_month = m - 1
    prev_year = y

    if prev_month == 0:
        prev_month = 12
        prev_year = y - 1

    last_day = days[prev_month]
    
    if prev_month == 2 and is_leap(prev_year):
        last_day = 29
    
    print(prev_year, prev_month, last_day)