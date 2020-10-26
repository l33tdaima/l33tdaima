class Solution:
    def winnerSquareGame(self, n: int) -> bool:
        dp = [False] * (n + 1)
        for i in range(1, n + 1):
            dp[i] = any(not dp[i - r * r] for r in range(1, int(i ** 0.5) + 1))
        return dp[-1]


# TESTS
for n, expected in [
    (1, True),
    (2, False),
    (3, True),
    (4, True),
    (5, False),
    (6, True),
    (7, False),
    (8, True),
    (17, False),
]:
    sol = Solution()
    actual = sol.winnerSquareGame(n)
    print("Alice wins the game of n =", n, "->", actual)
    assert actual == expected
