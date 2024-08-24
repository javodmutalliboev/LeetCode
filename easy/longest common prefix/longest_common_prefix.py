class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return []

        strs = sorted(strs, key=len)

        reference = strs[0]
        prefix = ""

        for i in range(len(reference)):
            char = reference[i]
            for string in strs:
                if string[i] != char:
                    return prefix
            prefix += char

        return prefix


solution = Solution()
strs = ["reflower", "flow", "flight"]
print(solution.longestCommonPrefix(["ab", "a"]))
