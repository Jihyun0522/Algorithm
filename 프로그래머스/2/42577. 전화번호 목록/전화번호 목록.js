function solution(phone_book) {
    const phoneHash = phone_book.reduce((acc, phone) => {
        acc[phone] = 1;
        return acc;
    }, {});
    
    for (let phone of phone_book) {
        let temp = "";
        for (let digit of phone) {
            temp += digit;
            
            if (temp in phoneHash && temp !== phone) {
                return false;
            }
        }
    }
    
    return true;
}