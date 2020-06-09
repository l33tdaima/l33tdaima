from typing import List


class Solution:
    def coinChangeTD(self, coins: List[int], amount: int) -> int:
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

    def coinChangeBU(self, coins: List[int], amount: int) -> int:
        dp = [0] + [-1] * amount
        for amt in range(1, amount + 1):
            sub = [dp[amt - c] for c in coins if amt - c >= 0]
            valid = [s for s in sub if s >= 0]
            dp[amt] = 1 + min(valid) if valid else -1
        return dp[amount]


# TESTS
tests = [
    ([1, 2, 3], 6, 2),
    ([1, 2, 5], 11, 3),
    ([2], 3, -1),
]
for t in tests:
    sol = Solution()
    actual = sol.coinChangeTD(t[0], t[1])
    print(
        "The fewest number of coins in", t[0], "to make up", t[1], "->", actual
    )
    assert actual == t[2]
    assert t[2] == sol.coinChangeBU(t[0], t[1])
