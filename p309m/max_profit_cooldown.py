from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp_i0, dp_i0_prev, dp_i1 = 0, 0, float("-Inf")
        for p in prices:
            i0_old = dp_i0
            dp_i0 = max(dp_i0, dp_i1 + p)
            dp_i1 = max(dp_i1, dp_i0_prev - p)
            dp_i0_prev = i0_old
        return dp_i0


# TESTS
tests = [
    ([2], 0),
    ([1, 3], 2),
    ([1, 2, 3, 0, 2], 3),
    ([1, 3, 2, 8, 4, 9], 8),
]
for t in tests:
    sol = Solution()
    actual = sol.maxProfit(t[0])
    print("Max profit you can make from", t[0], "with cooldown ->", actual)
    assert actual == t[1]

