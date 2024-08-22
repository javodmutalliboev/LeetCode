class Solution:
    def isPalindrome(self, x: int) -> bool:
        digit = 0
        temp_x = x
        reverse = 0
        while temp_x > 0:
            digit = int(temp_x % 10)
            reverse = int(reverse * 10) + digit
            temp_x = int(temp_x / 10)

        return x == reverse


solution = Solution()

print(solution.isPalindrome(121))
