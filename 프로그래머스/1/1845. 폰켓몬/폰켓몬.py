def solution(nums):
    limit = len(nums) // 2
    species = len(set(nums))
    
    return min(limit, species)