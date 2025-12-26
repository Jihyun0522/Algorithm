def solution(chicken):
    coupons = chicken
    service = 0
    
    while coupons >= 10:
        service += coupons // 10
        coupons = (coupons // 10) + (coupons % 10)
    
    return service