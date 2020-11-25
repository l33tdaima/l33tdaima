class Solution:
    def calculate(self, s: str) -> int:
        stack, op, num = [], "+", 0
        for i, c in enumerate(s):
            if c.isdigit():
                num = num * 10 + int(c)
            if c in "+-*/" or i == len(s) - 1:
                if op == "+":
                    stack.append(num)
                elif op == "-":
                    stack.append(-num)
                elif op == "*":
                    stack.append(stack.pop() * num)
                elif op == "/":
                    stack.append(int(stack.pop() / num))
                op, num = c, 0
        return sum(stack)


# TESTS
for s, expected in [
    [" 1 + 1", 2],
    ["10 -4", 6],
    ["2* 12", 24],
    [" 3/2 ", 1],
    ["3+2*2", 7],
    [" 3+5 / 2 ", 5],
    ["14-3/2", 13],
]:
    sol = Solution()
    actual = sol.calculate(s)
    print(s, "=", actual)
    assert actual == expected
