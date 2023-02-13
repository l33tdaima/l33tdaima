class Solution:
    def countOdds(self, low: int, high: int) -> int:
        count = high - low + 1
        if count % 2 and low % 2:
            return count // 2 + 1
        else:
            return count // 2


# TESTS
for low, high, expected in [
    (3, 7, 3),
    (8, 10, 1),
    (3, 6, 2),
    (4, 7, 2),
]:
    sol = Solution()
    actual = sol.countOdds(low, high)
    print("# of odds between", low, "and", high, "->", actual)
    assert actual == expected
