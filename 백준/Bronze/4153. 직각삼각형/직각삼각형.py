while True:
    nums = list(map(int, input().split()))

    if sum(nums) == 0:
        break

    nums.sort()
    print('right' if (nums[0]**2 + nums[1]**2) == nums[2]**2 else 'wrong')