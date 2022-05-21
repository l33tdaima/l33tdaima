class Solution:
    def coinChangeTD(self, coins: list[int], amount: int) -> int:
        dp = dict()

        def helper(amt: int) -> int:
            if amt == 0:
                return 0
            if amt < 0:
                return -1
            if amt in dp:
                return dp[amt]
            sub = [helper(amt - c) for c in coins]
            valid = [s for s in sub if s >= 0]
            dp[amt] = 1 + min(valid) if valid else -1
            return dp[amt]

        return helper(amount)

    def coinChangeBU(self, coins: list[int], amount: int) -> int:
        dp = [0] + [-1] * amount
        for amt in range(1, amount + 1):
            sub = [dp[amt - c] for c in coins if amt - c >= 0]
            valid = [s for s in sub if s >= 0]
            dp[amt] = 1 + min(valid) if valid else -1
        return dp[amount]


# TESTS
for coins, amount, expected in [
    ([1, 2, 3], 6, 2),
    ([1, 2, 5], 11, 3),
    ([2], 3, -1),
    ([1], 0, 0),
    ([1], 1, 1),
    ([1], 2, 2),
]:
    sol = Solution()
    actual = sol.coinChangeTD(coins, amount)
    print(
        "The fewest number of coins in",
        coins,
        "to make up",
        amount,
        "->",
        actual,
    )
    assert actual == expected
    assert expected == sol.coinChangeBU(coins, amount)
