function solution(chicken) {
    let coupons = chicken;
    let service = 0;
    
    while (coupons >= 10) {
        let newService = Math.floor(coupons / 10);
        service += newService;
        coupons = newService + (coupons % 10);
    }
    
    return service;
}