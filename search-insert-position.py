class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        index = -1
        notFound = False
        i = 0
        while i < len(nums):
            if notFound:
                if target < nums[i]:
                    index = i
                    break
            if not notFound and nums[i] == target:
                index = i
                break
            if not notFound and i == len(nums) - 1:
                notFound = True
                i = -1
            i += 1
        if index == -1:
            index = len(nums)
        return index


test_cases = [
    {"nums": [1, 3, 5, 6], "target": 5},
    {"nums": [1, 3, 5, 6], "target": 2},
    {"nums": [1, 3, 5, 6], "target": 7},
]

if __name__ == "__main__":
    solution = Solution()
    for test_case in test_cases:
        index = solution.searchInsert(test_case["nums"], test_case["target"])
        print(index)
