import math
import sys
input = sys.stdin.readline

factorials = [math.factorial(i) for i in range(6)]

while True:
    num = input().strip()
    
    if num == "0":
        break
    
    answer = 0
    for i, ch in enumerate(num[::-1]):
        answer += int(ch) * factorials[i+1] 
        
    print(answer)