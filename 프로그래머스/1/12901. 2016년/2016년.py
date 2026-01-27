def solution(a, b):
    month_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day_names = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    total_days = 0
    
    for month in range(0, a - 1):
        total_days += month_days[month]
    
    total_days += b
    
    return day_names[total_days % 7 - 1]