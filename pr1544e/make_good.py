class Solution:
    def makeGood(self, s: str) -> str:
        stack = []
        for c in s:
            if stack and stack[-1] == c.swapcase():
                stack.pop()
            else:
                stack.append(c)
        return "".join(stack)


# TESTS
for s, expected in [
    ("leEeetcode", "leetcode"),
    ("abBAcC", ""),
    ("s", "s"),
]:
    sol = Solution()
    actual = sol.makeGood(s)
    print("After making", s, "good ->", actual)
    assert actual == expected
