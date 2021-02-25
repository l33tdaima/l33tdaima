class Solution:
    def scoreOfParenthesesV1(self, S: str) -> int:
        stack = []
        for c in S:
            if c == "(":
                stack.append(c)
            else:
                op = stack.pop()
                if op == "(":
                    op = 1
                else:
                    op *= 2
                    stack.pop()
                if len(stack) > 0 and stack[-1] != "(":
                    stack[-1] += op
                else:
                    stack.append(op)
        return stack[0]

    def scoreOfParenthesesV2(self, S: str) -> int:
        stack, cur = [], 0
        for c in S:
            if c == "(":
                stack.append(cur)
                cur = 0
            else:
                cur += stack.pop() + max(cur, 1)
        return cur


# TESTS
for S, expected in [
    ("()", 1),
    ("(())", 2),
    ("()()", 2),
    ("(()(()))", 6),
]:
    sol = Solution()
    actual = sol.scoreOfParenthesesV1(S)
    print("Score of", S, "->", actual)
    assert actual == expected
    assert expected == sol.scoreOfParenthesesV2(S)
