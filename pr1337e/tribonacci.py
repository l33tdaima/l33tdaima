class Solution:
    def tribonacciV1(self, n: int) -> int:
        dp = [0, 1, 1] + [0] * (n - 2)
        for i in range(3, n + 1):
            dp[i] = sum(dp[i - 3 : i])
        return dp[n]

    def tribonacciV2(self, n: int) -> int:
        dp = [0, 1, 1]
        for i in range(3, n + 1):
            dp[i % 3] = sum(dp)
        return dp[n % 3]


# TESTS
for n, expected in [
    (0, 0),
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 4),
    (25, 1389537),
]:
    sol = Solution()
    actual = sol.tribonacciV2(n)
    print(f"Tribonacci({n}) = {actual}")
    assert actual == expected
    assert expected == sol.tribonacciV2(n)
