from typing import List


class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        travel_days = set(days)
        dp = [0] * 366
        for i in range(1, len(dp)):
            if i in travel_days:
                dp[i] = min(
                    dp[max(0, i - 1)] + costs[0],
                    dp[max(0, i - 7)] + costs[1],
                    dp[max(0, i - 30)] + costs[2],
                )
            else:
                dp[i] = dp[i - 1]
        return dp[365]


# TESTS
tests = [
    ([1, 4, 6, 7, 8, 20], [2, 7, 15], 11),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15], 17),
]
for t in tests:
    sol = Solution()
    actual = sol.mincostTickets(t[0], t[1])
    print("Min cost to travel", t[0], "->", actual)
    assert actual == t[2]
