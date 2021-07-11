class Solution:
    def numDecodings(self, s: str) -> int:
        MOD = 10 ** 9 + 7
        e0, e1, e2 = 1, 0, 0
        for c in s:
            if c == "*":
                f0 = 9 * e0 + 9 * e1 + 6 * e2
                f1 = e0
                f2 = e0
            else:
                f0 = (c > "0") * e0 + e1 + (c <= "6") * e2
                f1 = (c == "1") * e0
                f2 = (c == "2") * e0
            e0, e1, e2 = f0 % MOD, f1, f2
        return e0


# TESTS
for s, expected in [
    ("*", 9),
    ("1*", 18),
    ("2*", 15),
    ("2", 1),
    ("12", 2),
    ("*9", 10),
    ("123", 3),
    ("132", 2),
    ("19*798112", 60),
]:
    sol = Solution()
    actual = sol.numDecodings(s)
    print("# of ways to decode", s, "->", actual)
    assert actual == expected
