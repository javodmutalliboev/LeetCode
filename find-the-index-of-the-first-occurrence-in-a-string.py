class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        index = -1
        index = haystack.find(needle)
        return index
        for i in range(len(haystack)):
            j = i
            found = True
            for c in needle:
                if j == len(haystack):
                    found = False
                    break
                if c != haystack[j]:
                    found = False
                    break
                j += 1
            if found:
                index = i
                break

        return index


solution = Solution()
test_cases = [
    {"haystack": "sadbutsad", "needle": "sad"},
    {"haystack": "leetcode", "needle": "leeto"},
]

for test_case in test_cases:
    index = solution.strStr(test_case.get("haystack"), test_case.get("needle"))
    print(index)
