def solution(phone_book):
    phone_hash = {number: 1 for number in phone_book}
    
    for phone_number in phone_book:
        temp = ""
        for digit in phone_number:
            temp += digit
            
            if temp in phone_hash and temp != phone_number:
                return False
                
    return True