class Solution:
    def numDecodings(self, s: str) -> int:
        dp = [1] + [0] * len(s)
        dp[1] = 1 if s[0] != "0" else 0
        for i in range(2, len(s) + 1):
            dp[i] = (s[i - 1 : i] > "0") * dp[i - 1] + (
                10 <= int(s[i - 2 : i]) <= 26
            ) * dp[i - 2]
        return dp[-1]


# TESTS
for s, expected in [
    ("12", 2),
    ("226", 3),
    ("1", 1),
    ("102", 1),
    ("1302", 0),
    ("123", 3),
    ("132", 2),
]:
    sol = Solution()
    actual = sol.numDecodings(s)
    print("# of ways to decode", s, "->", actual)
    assert actual == expected

