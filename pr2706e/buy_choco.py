class Solution:
    def buyChoco(self, prices: list[int], money: int) -> int:
        min1, min2 = 101, 102
        for p in prices:
            if p < min1:
                min1, min2 = p, min1
            elif p >= min1 and p < min2:
                min2 = p
        return money if money < min1 + min2 else money - min1 - min2


# TESTS
for prices, money, expected in [
    ([1, 2, 2], 3, 0),
    ([3, 2, 3], 3, 3),
]:
    sol = Solution()
    actual = sol.buyChoco(prices, money)
    print("Leftover in", prices, "->", actual)
    assert actual == expected
