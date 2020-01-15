class Solution:
    def longestValidParenthesesV1(self, s: str) -> int:
        stack = [-1]
        ans = 0
        for i in range(len(s)):
            if s[i] == ")" and len(stack) > 1 and s[stack[-1]] == "(":
                stack.pop()
                ans = max(ans, i - stack[-1])
            else:
                stack.append(i)
        return ans

    def longestValidParenthesesV2(self, s: str) -> int:
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
tests = [
    ["(()", 2],
    [")()())", 4],
    ["()(()", 2],
    ["()(())", 6],
    ["((()()", 4],
    ["((())", 4],
    ["))(())", 4],
    ["()(()()", 4],
]
for t in tests:
    sol = Solution()
    actual1 = sol.longestValidParenthesesV1(t[0])
    actual2 = sol.longestValidParenthesesV2(t[0])
    print("Longest valid parentheses in", t[0], "->", actual1)
    assert actual1 == t[1] and actual2 == t[1]

