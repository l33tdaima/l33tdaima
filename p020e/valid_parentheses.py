class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            if c == "(":
                stack.append(")")
            elif c == "{":
                stack.append("}")
            elif c == "[":
                stack.append("]")
            else:
                if len(stack) == 0 or stack.pop() != c:
                    return False
        return len(stack) == 0


# TESTS
for s, expected in [
    ("{}", True),
    ("()[]{}", True),
    ("(]", False),
    ("([)]", False),
    ("{[]}", True),
]:
    sol = Solution()
    actual = sol.isValid(s)
    print("Is", s, "a valid parentheses? ->", actual)
    assert actual == expected
