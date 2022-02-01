from cmath import exp


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        pclosed, popen = 0, float("Inf")
        for p in prices:
            pclosed = max(pclosed, p - popen)
            popen = min(popen, p)
        return pclosed


# TESTS
for prices, expected in [
    ([7, 1, 5, 3, 6, 4], 5),
    ([7, 6, 4, 3, 1], 0),
]:
    sol = Solution()
    actual = sol.maxProfit(prices)
    print("Max profit by one transaction in", prices, "->", actual)
    assert actual == expected
