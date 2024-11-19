class Solution:
    def find(self, target) -> bool:
        for num in self.unique:
            if num == target:
                return True
        return False

    def removeDuplicates(self, nums: list[int]) -> int:
        self.unique = []
        k = 0
        lastDuplicate = None
        for num in nums:
            if lastDuplicate == num:
                continue
            found = self.find(num)
            if not found:
                lastDuplicate = num
                self.unique.append(num)
                nums[k] = num
                k += 1

        return k


solution = Solution()
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
print(solution.removeDuplicates(nums))
print(nums)
