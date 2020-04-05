from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        for i in range(len(prices) - 1):
            ans += max(prices[i + 1] - prices[i], 0)
        return ans


# TESTS
tests = [
    [[1], 0],
    [[7, 1, 5, 3, 6, 4], 7],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
]
for t in tests:
    sol = Solution()
    actual = sol.maxProfit(t[0])
    print("Max profix by inf transaction in", t[0], "->", actual)
    assert actual == t[1]
