class Solution:
    def maxIceCreamV1(self, costs: list[int], coins: int) -> int:
        ans = 0
        for c in sorted(costs):
            coins -= c
            if coins < 0:
                break
            ans += 1
        return ans

    def maxIceCreamV2(self, costs: list[int], coins: int) -> int:
        for i, c in enumerate(sorted(costs)):
            if coins >= c:
                coins -= c
            else:
                return i
        return len(costs)


# TESTS
for costs, coins, expected in [
    ([1, 3, 2, 4, 1], 7, 4),
    ([10, 6, 8, 7, 7, 8], 5, 0),
    ([1, 6, 3, 1, 2, 5], 20, 6),
]:
    sol = Solution()
    actual = sol.maxIceCreamV1(costs, coins)
    print(
        "The max ice cream bars from",
        costs,
        "with",
        coins,
        "coins ->",
        actual,
    )
    assert actual == expected
