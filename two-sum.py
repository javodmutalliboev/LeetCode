class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        result = []
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    result.extend([i, j])
                    return result
        return result


solution = Solution()
nums = [3, 2, 3]
target = 6
print(solution.twoSum(nums, target))
