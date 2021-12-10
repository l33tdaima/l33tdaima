class Solution:
    def numTilings(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        dp = [0, 1, 2, 5] + [0] * 997
        if n <= 3:
            return dp[n]
        for i in range(4, n + 1):
            dp[i] = 2 * dp[i - 1] + dp[i - 3]
        return dp[n] % MOD


# TESTS
for n, expected in [
    (0, 0),
    (1, 1),
    (2, 2),
    (3, 5),
    (4, 11),
    (5, 24),
    (6, 53),
    (7, 117),
]:
    sol = Solution()
    actual = sol.numTilings(n)
    print(f"# of ways to tile an 2 x {n} board -> {actual}")
    assert actual == expected
