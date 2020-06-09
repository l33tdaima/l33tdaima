from typing import List


class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = dict()

        def helper(i: int, amt: int) -> int:
            if amt == 0:
                return 1
            if amt < 0 or i == len(coins):
                return 0
            if (i, amt) in dp:
                return dp[(i, amt)]
            dp[(i, amt)] = helper(i, amt - coins[i]) + helper(i + 1, amt)
            return dp[(i, amt)]

        return helper(0, amount)


# TESTS
tests = [
    (2, [1, 2], 2),
    (3, [1, 2], 2),
    (5, [1, 2, 5], 4),
    (3, [2], 0),
    (10, [10], 1),
]
for t in tests:
    sol = Solution()
    actual = sol.change(t[0], t[1])
    print(
        "The number of combinations",
        t[1],
        "that makes up that amount",
        t[0],
        "->",
        actual,
    )
