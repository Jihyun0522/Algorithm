function solution(price, money, count) {
    const total = price * (count * (count + 1) / 2);
    const diff = total - money;
    return diff > 0 ? diff : 0;
}