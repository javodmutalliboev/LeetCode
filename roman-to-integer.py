RI = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}


class Solution:
    def romanToInt(self, s: str) -> int:
        integer = 0
        for i in range(len(s)):
            if i == 0:
                integer += RI[s[i]]
            elif RI[s[i]] > RI[s[i - 1]]:
                integer += RI[s[i]] - RI[s[i - 1]] * 2
            else:
                integer += RI[s[i]]
        return integer


solution = Solution()
print(solution.romanToInt("III"))
