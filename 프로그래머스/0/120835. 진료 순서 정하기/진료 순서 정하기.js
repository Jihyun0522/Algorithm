function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a, b) => b - a);
    const rankMap = new Map();
    sortedEmergency.forEach((level, i) => {
        rankMap.set(level, i + 1);
    });
    return emergency.map(level => rankMap.get(level));
}