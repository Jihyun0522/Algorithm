a = input()
b = input()
c = input()

next_val = 0

if a.isdigit():
    next_val = int(a) + 3
elif b.isdigit():
    next_val = int(b) + 2
elif c.isdigit():
    next_val = int(c) + 1

if next_val % 3 == 0 and next_val % 5 == 0:
    print('FizzBuzz');
elif next_val % 3 == 0 and next_val % 5 != 0:
    print('Fizz');
elif next_val % 3 != 0 and next_val % 5 == 0:
    print('Buzz');
else:
    print(next_val)