function solution(nums) {
    const maxSelect = nums.length / 2;
    const typeCount = new Set(nums).size;
    
    return Math.min(maxSelect, typeCount);
}