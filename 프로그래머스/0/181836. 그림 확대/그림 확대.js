function solution(picture, k) {
    return picture.flatMap(row => {
        const expandedRow = row.split('').map(char => char.repeat(k)).join('');
        return Array.from({ length: k }, () => expandedRow);
    });
}