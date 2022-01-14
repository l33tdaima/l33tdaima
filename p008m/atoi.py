class Solution:
    def myAtoi(self, s: str) -> int:
        sign, result = 1, 0
        for i, c in enumerate(s.lstrip()):
            if i == 0 and c == "-":
                sign = -1
                continue
            if i == 0 and c == "+":
                sign = 1
                continue
            if c.isdigit():
                result = result * 10 + ord(c) - ord("0")
            else:
                break
        return max(-(2 ** 31), min(sign * result, 2 ** 31 - 1))


# TEST
for s, expected in [
    ["", 0],
    [" -1", -1],
    ["+007", 7],
    [" - 9", 0],
    [" 4546 9090", 4546],
    ["4000000000", 2147483647],
    ["-3000000000", -2147483648],
]:
    sol = Solution()
    actual = sol.myAtoi(s)
    print("atoi(" + s + ") ->", actual)
    assert actual == expected
