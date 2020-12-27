class Solution:
    def numDecodings(self, s: str) -> int:
        if len(s) == 0:
            return 0
        isValid = lambda s: len(s) > 0 and s[0] != "0" and 0 < int(s) <= 26
        dp = [1] + [0 for _ in s]
        dp[1] = 1 if s[0] != "0" else 0
        for i in range(2, len(s) + 1):
            if isValid(s[i - 1 : i]):
                dp[i] += dp[i - 1]
            if isValid(s[i - 2 : i]):
                dp[i] += dp[i - 2]
        return dp[-1]


# TESTS
for s, expected in [
    ("12", 2),
    ("226", 3),
    ("", 0),
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

