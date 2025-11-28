import math

def solution(numer1, denom1, numer2, denom2):
    new_number = (numer1 * denom2) + (numer2 * denom1)
    new_denom = denom1 * denom2
    
    gcd_value = math.gcd(new_number, new_denom)
    
    return [new_number // gcd_value, new_denom // gcd_value]