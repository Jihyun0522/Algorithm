const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAY_NAMES = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
    let totalDays = b;
    
    for (let i = 0; i < a - 1; i++) {
        totalDays += MONTH_DAYS[i];
    }
    
    return DAY_NAMES[(totalDays - 1) % 7];
}