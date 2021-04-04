class Solution:
    def longestValidParenthesesSlow(self, s: str) -> int:
        stack, ans = [-1], 0
        for i in range(len(s)):
            if s[i] == ")" and len(stack) > 1 and s[stack[-1]] == "(":
                stack.pop()
                ans = max(ans, i - stack[-1])
            else:
                stack.append(i)
        return ans

    def longestValidParenthesesFast(self, s: str) -> int:
        left, right, ans = 0, 0, 0
        for c in s:
            if c == "(":
                left += 1
            else:
                right += 1
            if left == right:
                ans = max(ans, right * 2)
            elif left < right:
                left, right = 0, 0
        left, right = 0, 0
        for c in s[::-1]:
            if c == "(":
                left += 1
            else:
                right += 1
            if left == right:
                ans = max(ans, left * 2)
            elif left > right:
                left, right = 0, 0
        return ans


# TESTS
for s, expected in [
    ("(()", 2),
    (")()())", 4),
    ("", 0),
    ("()(()", 2),
    ("()(())", 6),
    ("((()()", 4),
    ("((())", 4),
    ("))(())", 4),
    ("()(()()", 4),
]:
    sol = Solution()
    actual1 = sol.longestValidParenthesesSlow(s)
    actual2 = sol.longestValidParenthesesFast(s)
    print("Longest valid parentheses in", s, "->", actual1)
    assert actual1 == expected and actual2 == expected

