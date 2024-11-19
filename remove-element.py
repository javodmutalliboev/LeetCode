class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        k = 0
        for num in nums:
            if val != num:
                nums[k] = num
                k += 1
        return k


solution = Solution()
nums = [3, 2, 2, 3]
val = 3
print(solution.removeElement(nums, 3))
print(nums)
