# valid_parentheses


class Solution:
    def isValid(self, s: str) -> bool:
        length: int = len(s)
        if length < 1 or length > 104**4:
            print(f"s length {length} should be between 1 and 10^4")
            return False

        stack = []
        matching_bracket = {")": "(", "}": "{", "]": "["}

        for char in s:
            if char in matching_bracket.values():
                stack.append(char)
            elif char in matching_bracket.keys():
                if stack == [] or matching_bracket[char] != stack.pop():
                    return False
            else:
                return False

        return stack == []


solution = Solution()
s1: str = "()"
s2: str = "()[]{}"
s3: str = "(]"
s4: str = "([])"
s5: str = "["


print(solution.isValid(s5))
