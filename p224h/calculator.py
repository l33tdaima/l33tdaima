class Solution:
    def calculate(self, s: str) -> int:
        result, sign, num, stack = 0, 1, 0, list()
        for c in s:
            if c == " ":
                continue
            elif c == "+" or c == "-":
                result += sign * num
                sign, num = 1 if c == "+" else -1, 0
            elif c == "(":
                stack.append((sign, result))
                sign, result = 1, 0
            elif c == ")":
                result += sign * num
                num = 0
                pres, pren = stack.pop()
                result *= pres
                result += pren
            else:  # c.isdigit():
                num = num * 10 + int(c)
        result += sign * num
        return result


# TESTS
for s, expected in [
    ("1 + 1", 2),
    (" 2-1 + 2 ", 3),
    ("(1+(4+5+2)-3)+(6+8)", 23),
]:
    sol = Solution()
    actual = sol.calculate(s)
    print(s, "=", actual)
    assert actual == expected
