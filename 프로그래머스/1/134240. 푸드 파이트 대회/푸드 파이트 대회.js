function solution(food) {
    let leftSide = [];
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);
        for (let j = 0; j < count; j++) {
            leftSide.push(i);
        }
    }
    return leftSide.join('') + '0' + leftSide.reverse().join('');
}