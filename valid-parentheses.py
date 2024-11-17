class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i, char in enumerate(s):
            match char:
                case "(":
                    stack.append(char)
                case ")":
                    if i == 0:
                        return False
                    length = len(stack)
                    if length == 0:
                        return False
                    if stack[-1] != "(":
                        return False
                    stack.pop()
                case "{":
                    stack.append(char)
                case "}":
                    if i == 0:
                        return False
                    length = len(stack)
                    if length == 0:
                        return False
                    if stack[-1] != "{":
                        return False
                    stack.pop()
                case "[":
                    stack.append(char)
                case "]":
                    if i == 0:
                        return False
                    length = len(stack)
                    if length == 0:
                        return False
                    if stack[-1] != "[":
                        return False
                    stack.pop()
                case _:
                    pass

        if len(stack):
            return False

        return True


solution = Solution()
print(solution.isValid("(){}}{"))
