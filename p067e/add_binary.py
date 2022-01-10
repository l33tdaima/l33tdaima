from itertools import zip_longest


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry, ans = 0, []
        for i, j in zip_longest(a[::-1], b[::-1], fillvalue="0"):
            carry += int(i) + int(j)
            ans.append(str(carry % 2))
            carry //= 2
        if carry:
            ans.append("1")
        return "".join(ans[::-1])


# TEST
for a, b, expected in [
    ["11", "1", "100"],
    ["10", "1010", "1100"],
    ["110", "10001", "10111"],
    ["111111", "1", "1000000"],
]:
    sol = Solution()
    actual = sol.addBinary(a, b)
    print(a, "+", b, "->", actual)
    assert actual == expected
