class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        elif x < 10:
            return True
        elif x % 10 == 0:
            return False
        digits = []
        xUse = x
        while xUse:
            digit = xUse % 10
            digits.append(str(digit))
            xUse //= 10
        reverse = int("".join(digits))
        if x == reverse:
            return True

        return False


solution = Solution()
print(solution.isPalindrome(121))
