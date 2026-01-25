function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(([w, h]) => {
        const [long, short] = w > h ? [w, h] : [h, w];
        
        if (long > maxWidth) maxWidth = long;
        if (short > maxHeight) maxHeight = short;
    });

    return maxWidth * maxHeight;
}