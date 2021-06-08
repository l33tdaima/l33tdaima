from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        N = len(cost) + 1
        dp = [0] * N
        for i in range(2, N):
            dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
        return dp[-1]


# TESTS
for cost, expected in [
    ([3, 1], 1),
    ([1, 4], 1),
    ([10, 15, 20], 15),
    ([1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6),
]:
    sol = Solution()
    actual = sol.minCostClimbingStairs(cost)
    print("Min cost climbing", cost, "->", actual)
    assert actual == expected
