class Solution(object):
    def plusOne(self, digits: list[int]) -> list[int]:
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        if len(digits) == 0:
            return digits
        for i in range(len(digits) - 1, -1, -1):
            self.sum = digits[i] + 1
            if self.sum // 10:
                digits[i] = 0
                if i == 0:
                    digits.insert(0, 1)
                    return digits
            else:
                digits[i] = self.sum
                return digits


solution = Solution()
test_cases = [[1, 2, 3], [4, 3, 2, 1], [9]]

for test_case in test_cases:
    print(solution.plusOne(test_case))
