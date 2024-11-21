class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.strip().split(" ")[-1])

        k = 0
        i = 0
        length = 0
        while i < len(s) - 1:
            if s[i] == " " and s[i + 1] != " ":
                k = i + 1
            i += 1
        while k < len(s):
            if s[k] == " ":
                break
            length += 1
            k += 1
        return length


test_cases = ["Hello World", "   fly me   to   the moon  ", "luffy is still joyboy"]

solution = Solution()
for test_case in test_cases:
    print(f"length: {solution.lengthOfLastWord(test_case)}")
