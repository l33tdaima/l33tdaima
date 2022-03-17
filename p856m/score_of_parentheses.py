class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack, cur = [], 0
        for c in s:
            if c == "(":
                stack.append(cur)
                cur = 0
            else:
                cur += stack.pop() + max(cur, 1)
        return cur

    def scoreOfParenthesesO1(self, s: str) -> int:
        ans, l = 0, 0
        for p, n in zip(s, s[1:]):
            if p + n == "()":
                ans += 2 ** l
            l += 1 if p == "(" else -1
        return ans


# TESTS
for s, expected in [
    ("()", 1),
    ("(())", 2),
    ("()()", 2),
    ("(()(()))", 6),
]:
    sol = Solution()
    actual = sol.scoreOfParentheses(s)
    print("Score of", s, "->", actual)
    assert actual == expected
    assert expected == sol.scoreOfParenthesesO1(s)
