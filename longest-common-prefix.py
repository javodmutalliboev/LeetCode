class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        length = len(strs)
        if length == 1:
            return strs[0]
        elif length == 0:
            return ""

        lcp = ""
        char_i = 0
        common = True
        while char_i < len(strs[0]):
            for i in range(1, len(strs)):
                if len(strs[i]) <= char_i:
                    return lcp
                if strs[0][char_i] != strs[i][char_i]:
                    common = False

            if common:
                lcp += strs[0][char_i]

            char_i += 1

        return lcp


solution = Solution()
print(solution.longestCommonPrefix(["dog", "racecar", "car"]))
